利用Swagger UI接口文档同步本地Mock数据
===

### 什么是Mock
Mock顾名思义是一种模拟。通常利用相同的接口来模拟出一个对象以代替真实对象，这样能有效隔离外部依赖，便于测试。对于前端开发，Mock作为重要一环，能带来很多好处：

- **前后端并行开发** 
- **模拟各种响应值，便于测试**
- **可及早发现一些极端响应值下的页面布局问题等**

### 背景
前端开发可简单分为三个阶段：并行开发阶段、联调阶段和测试阶段。现在的前端项目大多为前后端分离，在开发、联调阶段不可避免要面对数据源的问题。

![前端开发阶段](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/process.png)

在联调阶段，各个环境已有真实数据，方便本地调试，我们一般会将接口指向真实数据源。如果有跨域限制的话，可利用Charles、Fiddler等调试代理工具来解决，也可以起一个本地Server：

```javascript
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use('/api', proxy({ target: 'your-api-url', changeOrigin: true }));
app.listen(3000);

```

如果还处在并行开发阶段，那我们就需要Mock数据，一般有以下几种常用方式：

1、拦截Ajax、Fetch请求</br>
缺点：前端混入脏代码；无法有效模拟网络情况。

2、本地Mock Server</br>
缺点：接口众多，创建和修改成本高。

3、YApi、Easy Mock的接口管理平台</br>
缺点：灵活性不够。比如一些配置信息分散在各个接口，没法集中管理，修改成本高。

本文以笔者接触较多的Swagger为例，从一个侧面改善本地Mock Server需要不断创建接口的缺点。打开后端提供的Swagger UI地址的Network，发现有个api-docs文件。

![接口文档](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/api-docs.png)

这个JSON文件包含接口、请求方法、响应格式等信息。可以想见解析这个文件并不难，唯一比较麻烦的可能就是响应值的解析和类型转换。如果能适时同步数据到本地Mock Server，能省去不少乏味的体力活。

### Talk is cheap

#### 1、目标
- **接口路径和Mock目录相对应，便于查找、修改**
- **以请求方法为文件名，一个方法对应一个文件，减少多人编辑冲突**
- **使用Mock.js包装响应值，易于模拟一些极端状况** 


#### 2、解析JSON文件

前面我们提到解析JSON文件的难点主要在响应值类型的转换，这边我们利用Easy Mock的一个解析模块来做这件事情。

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
  "url": "your-api-docs-url",
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
        "example": "'@string'" // 模块为我们做的类型转化和Mock.js包装。
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

#### 3、遍历接口。我们可以加入黑名单，过滤掉一些对前端没有用处的接口。减少干扰，提高可维护性。

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

#### 4、生成Mock文件，可以添加注释等信息。
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


#### 5、启动Mock Server
以express为例，利用require动态特征我们来创建路由，映射到刚才创建的接口文件。

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
至此我们就利用Swagger UI同步Mock数据，如果再加上cors、body-parser等Middleware，一个本地Mock Server基本成形。方便同步，我们将它加入npm scripts。

```javascript
  "scripts": {
    "ss": "node ./synchronizeSwagger.js"
  },
```

执行npm run ss，就能生成相应的Mock数据和访问接口了。

![route](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/route.png)

![api](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/api.png)


附件：[示例代码](https://github.com/zzf03680147/synchronizeSwagger)
