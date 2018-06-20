/**
    在生成页面时，用文件uuid来生成token，30分钟有效；下载文件时用token来进行下载
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/file/queryTokenByKey', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };