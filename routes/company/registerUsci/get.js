/**
    企业平台--注册usci
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/registerUsci', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };