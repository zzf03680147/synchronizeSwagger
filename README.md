利用swagger-ui生成本地mock数据
===
### 为什么前端需要mock

mock作为前端开发重要的一环，可以带来诸多好处：

- **前后端并行开发** 
- **模拟各种响应，易于测试**
- **及早发现一些极端情况下的布局问题**
- ...

### 缘起
yapi，easymock等接口管理平台都提供了swagger，postman数据导入功能，原理大同小异，无非就是解析json文件来生成相应的api。以swagger为例，打开network会发现有个api-docs文件:

![api-doc](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/api-docs.png)


可以想见，如果能适时同步后端部署的接口，将省去前端不少体力活。我们就以此文件为基础，来试着构建本地的mock。

### 目标
- **api路径和本地的mock文件目录相对应，便于查找、修改**
- **以请求方法为文件名,一个方法对应一个文件，减少编辑冲突**
- **使用mockjs包装响应值，易于模拟一些极端状况** 


### Talk is cheap

##### ①解析

从上图可以发现解析json文件，主要的工作在响应值类型的转换，这个我们交给第三方。
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
    }

  }
```

这样我们就能得到如下的api路径信息，其中example就是插件为我们做的类型转化和mock包装
```javascript
  "/path/foo": {
    "get": {
      "summary": "bar",
      "responses": {
        "200": {
          "example": "'@string'"
        }
      }
    }
  }
```

##### ②生成文件

```javascript
  const mkdirp = require('mkdirp');
  const join = require('path').join;
  const fs = require('fs');

  const synchronizeSwagger = {
    // 创建目录
    mkdirSync(outputPath) {
      mkdirp.sync(outputPath, function(err) {
        if (err) {
          console.error(err);
        }
      });
    },

    // 生成文件模板
    generateTemplate({ summary, example, method, path }) {
      // prettier-ignore
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

    // 创建文件
    writeFileSync(path, template) {
      try {
        fs.writeFileSync(path, template, { flag: "wx" });
        console.log(`增加Mock文件：${path}`);
      } catch (err) {
        console.error(err);
      }
    },

    generate(paths) {
      Object.keys(paths).forEach(path => {
        const pathInfos = paths[path];

        Object.keys(pathInfos).forEach(method => {
          const pathInfo = pathInfos[method];
          if (this.blacklist.includes(path) || !pathInfo["responses"]["200"]) {
            return false;
          }
          const outputPath = join(__dirname, this.outputPath, path);
          const summary = pathInfo["summary"];
          const example = pathInfo["responses"]["200"]["example"];

          this.mkdirSync(outputPath);
          const template = this.generateTemplate({
            summary,
            example,
            method,
            path
          });
          this.writeFileSync(`${outputPath}/${method}.js`, template);
        });
      });
    }
}
```

##### ③启动服务
以express为例，利用require动态特征我们来创建路由。
```javascript

const express = require('express');
const fs = require('fs');
const join = require('path').join;
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`server is listening ${port}`);
});

function scan(path, app) {
  const files = fs.readdirSync(path);
  for (let i = 0; i < files.length; i++) {
    let fpath = join(path, files[i]);
    let stats = fs.statSync(fpath);
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
到此，我们就利用swagger-ui生成了本地mock数据，再加上跨域、body-parser等middleware, 一个mini mock就基本可用了。为了方便同步，我们还可以将它加入npm scripts:

```javascript
  "scripts": {
    "ss": "node ./synchronizeSwagger.js"
  },
```

附件：[示例代码](https://github.com/zzf03680147/synchronizeSwagger)