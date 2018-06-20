/**
    合作企业详情
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/funder/enterprise/:id', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "address": "@string",
    "apAmount": "@integer(60, 100)",
    "apRemain": "@integer(60, 100)",
    "associatedFunders": [
      {
        "discountAmount": "@integer(60, 100)",
        "financeAmount": "@integer(60, 100)",
        "name": "@string",
        "rateHigh": "@integer(60, 100)",
        "rateLow": "@integer(60, 100)"
      }
    ],
    "bankAccount": "@string",
    "bankName": "@string",
    "branchBankName": "@string",
    "contractId": "@string",
    "email": "@string",
    "legalPersonId": "@string",
    "legalPersonName": "@string",
    "licenceOssId": "@string",
    "name": "@string",
    "phone": "@string",
    "usci": "@string"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };