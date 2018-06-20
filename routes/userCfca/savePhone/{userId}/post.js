/**
    修改注册安心签的手机号
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/userCfca/savePhone/:userId', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };