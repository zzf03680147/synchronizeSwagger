/**
    企业平台--企业信息 (仅适用于核心企业和供应商)
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/companyDetails', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };