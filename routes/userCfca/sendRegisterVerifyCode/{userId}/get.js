/**
    发送注册安心签短信验证码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/userCfca/sendRegisterVerifyCode/:userId', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };