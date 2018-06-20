/**
    发送验证码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/sendVerificationCode', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };