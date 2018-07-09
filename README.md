利用Swagger UI生成本地Mock数据
===

### 什么是Mock？
Mock顾名思义是一种模拟。在项目测试中，通常利用相同的接口来模拟一个对象以代替真实对象，这样可以隔离外部依赖，便于测试。Mock作为前端开发重要的一环，可以带来很多好处：

- **前后端并行开发** 
- **模拟各种响应，易于测试**
- **及早发现一些极端情况下的页面布局问题**
- ...

### 背景
前端开发大致可分为三个阶段：并行开发阶段->联调阶段->测试阶段。对于前后端分离项目，要面对数据源的问题。

<div align="center">
![process](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/process.png)
</div>

处于联调阶段，我们可以通过不同环境来获取数据源。如果有跨域限制的话，可以通过Charles、Fiddler调试代理等工具来解决，也可以起一个本地服务：
```javascript
  const express = require('express');
  const proxy = require('http-proxy-middleware');
  const app = express();

  app.use('/api', proxy({ target: 'your-api-url', changeOrigin: true }));
  app.listen(3000);

```

如果处于并行开发阶段，那我们就需要Mock数据，一般有如下几种常用方式：

1. 拦截ajax、fetch请求
缺点：前端混入脏代码。

2. 本地Mock Server
缺点：接口众多，创建和修改成本高。

3. YApi、Easy Mock的接口管理平台
缺点：灵活性不够。比如一些配置信息散落在各个接口，没法集中管理，修改成本高。


通过拦截和平台的方式，其缺点比较难于克服。本文试着以笔者接触较多Swagger为例来改造本地Mock Server，以降低不断创建和修改接口带来的成本和乏味。
打开network会发现有个api-docs文件:

<div align="center">
![api-doc](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/api-docs.png)
</div>

YApi、Easy Mock等接口管理平台都提供了Swagger、Postman数据导入功能，原理大同小异，无非就是解析json文件来生成相应的api。可以想见，如果能适时同步后端部署的接口，将省去前端不少体力活。我们就以此文件为基础，来试着构建本地的mock数据。

### 目标
- **api path和mock文件目录相对应，便于查找、修改**
- **以api method为文件名,一个方法对应一个文件，减少多人编辑冲突**
- **使用mockjs包装响应值，易于模拟一些极端状况** 


### Talk is cheap

#### 1.解析json文件

从上图可以发现解析json文件，主要的工作在响应值类型的转换，这边我们利用easymock的一个解析模块来做这件事情。
```javascript
  const swaggerParserMock = require('swagger-parser-mock');

  const synchronizeSwagger = {
    init({ url, blacklist, outputPath }) {
      this.url = url;
      this.blacklist = blacklist;
      this.outputPath = outputPath;
      this.parse();
    },
    async parse() {
      const { paths } = await swaggerParserMock(this.url);
      this.generate(paths);
      console.log(paths);
    }
  }
  
  synchronizeSwagger.init({
    // Swagger api-docs地址
    "url":"https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/swagger.json",
    // 输出目录
    "outputPath": "./routes",
    // 黑名单，跳过一些不需要同步的api
    "blacklist": []
  });

```

打印paths信息，格式大致如下：
```javascript
  "/path/foo": {
    "get": {
      "summary": "bar",
      "responses": {
        "200": {
          "example": "'@string'" // 模块为我们做的类型转化和mock包装。
        }
      }
    },
    "post": {
      "summary": "baz",
      "responses": {
        "200": {
          "example": "'@string'"
        }
      }
    }
  }
```

#### 2.遍历接口

```javascript
  const fs = require('fs');
  const { join } = require('path');
  const { promisify } = require('util');
  const mkdirp = require('mkdirp');

  const writeFile = promisify(fs.writeFile);
  const mkdir = promisify(mkdirp);

  const synchronizeSwagger = {
    // 遍历api path信息
    traverse(paths) {
      for (let path in paths) {
        if (this.blacklist.includes(path)) {
          continue;
        }

        for (let method in paths[path]) {
          const pathInfo = paths[path][method];

          if (!pathInfo['responses']['200']) {
            continue;
          }
          this.generate(path, method, pathInfo);
        }
      }
    }
  }
```

#### 3.生成mock文件
```javascript
  const synchronizeSwagger = {
    // 生成mock文件
    async generate(path, method, pathInfo) {
      const outputPath = join(__dirname, this.outputPath, path);
      const {
        summary,
        responses: { 200: responseOK },
      } = pathInfo;

      try {
        // 生成目录
        await mkdir(outputPath);

        const example = responseOK['example'];
        // 生成文件内容
        const template = this.generateTemplate({
          summary,
          example,
          method,
          path,
        });

        // 生成文件, 已存在的跳过，避免覆盖本地以及编辑的文件
        const fPath = join(outputPath, `${method}.js`);
        await writeFile(fPath, template, { flag: 'wx' });
        console.log(`增加Mock文件：${fPath}`);
      } catch (error) {
        /* eslint-disable no-empty */
      }
    },

    generateTemplate({ summary, example, method, path }) {
    // prettier-ignore
    // api path中的{petId}形式改为:petId
    return `/**
${summary}
**/
const Mock = require("mockjs");
module.exports = function (app) {
  app.${method}('/api${path.replace(/\{([^}]*)\}/g, ":$1")}', (req, res) => {
    res.json(Mock.mock(${example}));
  });
};`;
  },
  }
```


#### 4.启动服务
以express为例，利用require动态特征我们来创建路由。
```javascript

const fs = require('fs');
const join = require('path').join;
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`server is listening ${port}`);
});


function scan(path, app) {
  const files = fs.readdirSync(path);

  for (let i = 0; i < files.length; i++) {
    const fpath = join(path, files[i]);
    const stats = fs.statSync(fpath);

    if (stats.isDirectory()) {
      scan(fpath, app);
    }
    if (stats.isFile()) {
      require(fpath)(app);
    }
  }
}

scan(join(__dirname, './routes'), app);

```

### 写在最后
至此我们就利用Swagger UI生成了本地mock数据，如果再加上跨域、body-parser等middleware, 一个mock服务就基本成形。方便同步，我们还可以将它加入npm scripts：

```javascript
  "scripts": {
    "ss": "node ./synchronizeSwagger.js"
  },
```
执行npm run ss，就能生成相应的mock数据和访问api了：

<div align="center">
![route](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/route.png)
</div>

<div align="center">
![api](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/api.png)
</div>

附件：[示例代码](https://github.com/zzf03680147/synchronizeSwagger)
