/**
    当前邮箱的注册状态
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/emailStatus', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };