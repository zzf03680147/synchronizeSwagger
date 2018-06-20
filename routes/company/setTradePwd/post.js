/**
    设置交易密码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/setTradePwd', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };