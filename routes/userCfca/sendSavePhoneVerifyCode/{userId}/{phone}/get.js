/**
    发送修改手机号短信验证码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/userCfca/sendSavePhoneVerifyCode/:userId/:phone', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };