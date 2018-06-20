/**
    企业平台--被我邀请的供应商列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/getMySuppliers/:page/:size', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };