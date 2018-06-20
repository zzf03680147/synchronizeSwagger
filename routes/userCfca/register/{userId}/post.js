/**
    用户安心签注册
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/userCfca/register/:userId', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };