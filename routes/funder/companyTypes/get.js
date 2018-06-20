/**
    公司类型
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/funder/companyTypes', (req, res) => {
      res.json(Mock.mock({
  "content": [
    {
      "name": "@string",
      "value": "@integer(60, 100)"
    }
  ],
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };