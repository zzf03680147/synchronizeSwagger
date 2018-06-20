/**
    公司类型，10:核企业，11:L1，12：Ln
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/profile/company/type', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };