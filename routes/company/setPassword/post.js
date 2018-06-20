/**
    设置密码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/setPassword', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };