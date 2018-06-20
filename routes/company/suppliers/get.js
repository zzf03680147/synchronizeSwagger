/**
    查询公司下的下游公司
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/suppliers', (req, res) => {
      res.json(Mock.mock({
  "content": [
    {
      "companyBankAccount": "@string",
      "companyBankName": "@string",
      "companyId": "@integer(60, 100)",
      "companyName": "@string",
      "companyUsci": "@string"
    }
  ],
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };