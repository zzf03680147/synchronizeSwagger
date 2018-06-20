利用swagger-ui生成本地mock数据
===
### mock带来的好处

mock作为前端必不可少的一环，可以带来很多好处：

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
