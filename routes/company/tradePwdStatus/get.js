/**
    是否设置过交易密码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/tradePwdStatus', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };