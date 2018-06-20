/**
    验证验证码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/confirmVerificationCode', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };