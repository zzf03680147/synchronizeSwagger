/**
    验证供应商经办人手机号
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/supplier/verifyPhone', (req, res) => {
      res.json(Mock.mock({
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };