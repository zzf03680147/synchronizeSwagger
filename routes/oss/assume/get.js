/**
    获取oss接口参数
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/oss/assume', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };