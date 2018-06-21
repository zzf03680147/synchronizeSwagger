利用swagger-ui生成本地mock数据
===
### mock带来的好处

mock作为前端开发重要的一环，可以带来诸多好处：

- **前后端并行开发** 
- **模拟各种响应，易于测试**
- **及早发现一些极端情况下的布局问题**
- ...


```javascript
    init({ url, blacklist, output }) {
        this.url = url;
        this.blacklist = blacklist;
        this.output = output;
        this.parse();
    }
```


yapi,easymock等接口管理平台都提供了swagger,postman数据导入功能，以swagger为例，打开network,可以看见api-docs文件

可以想见，如果能适时同步后端部署的接口，可以省去不少体力活。本文就是以此文件为基础，试着构建本地的mock数据

### 目标
- **api path和本地的mock文件目录相对应，便于查找、修改**
- **以api method为文件名**
- **使用mockjs包装响应值，易于mock一些极端状况** 
