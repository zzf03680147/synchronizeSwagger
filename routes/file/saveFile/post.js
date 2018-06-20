/**
    上传文件，前端需要生成key，和文件一起上传，上传成功返回值是success，失败报错
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/file/saveFile', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };