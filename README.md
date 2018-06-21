利用swagger-ui生成本地mock数据
===
### 为什么前端需要mock

mock作为前端开发重要的一环，可以带来诸多好处：

- **前后端并行开发** 
- **模拟各种响应，易于测试**
- **及早发现一些极端情况下的布局问题**
- ...

### 缘起
yapi,easymock等接口管理平台都提供了swagger,postman数据导入功能，原理大同小异，无非就是解析json文件，然后生成相应的api。以swagger为例，打开network可以看见有个api-docs文件:

![api-doc](https://raw.githubusercontent.com/zzf03680147/synchronizeSwagger/master/static/img/api-docs.png)

可以想见，如果能适时同步后端部署的接口，可以省去前端不少体力活。本文就是以此文件为基础，试着构建本地的mock。

### 目标
- **api path和本地的mock文件目录相对应，便于查找、修改**
- **以api method为文件名,一个api对应一个文件，减少冲突**
- **使用mockjs包装响应值，易于模拟一些极端状况** 


### Talk is cheap
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

### 写在最后
这样我们就利用swagger-ui生成了本地mock数据，再加上跨域、body-parser等middleware, 一个mini mock就基本可用了。为了方便同步，我们还可以将它加入npm scripts:

```javascript
  "scripts": {
    "ss": "node ./synchronizeSwagger.js"
  },
```
