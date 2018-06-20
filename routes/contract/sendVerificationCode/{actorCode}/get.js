/**
    发送安心签（cfca）短信验证码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/contract/sendVerificationCode/:actorCode', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };