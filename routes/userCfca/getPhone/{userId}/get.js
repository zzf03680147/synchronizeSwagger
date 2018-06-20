/**
    获取注册安心签的手机号
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/userCfca/getPhone/:userId', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };