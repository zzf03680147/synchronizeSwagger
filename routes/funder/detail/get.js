/**
    资金方详情
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/funder/detail', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "checker": {
      "authorizationOssId": "@string",
      "email": "@string",
      "idBackOssId": "@string",
      "idFrontOssId": "@string",
      "idNo": "@string",
      "name": "@string",
      "phone": "@string"
    },
    "companyVO": {
      "address": "@string",
      "bankAccount": "@string",
      "bankName": "@string",
      "branchBankName": "@string",
      "companyCreditReportId": "@string",
      "contractId": "@string",
      "email": "@string",
      "legalPersonBackOssId": "@string",
      "legalPersonCreditReportOssId": "@string",
      "legalPersonFrontOssId": "@string",
      "legalPersonId": "@string",
      "legalPersonName": "@string",
      "legalPersonPhone": "@string",
      "licenceOssId": "@string",
      "name": "@string",
      "tel": "@string",
      "usci": "@string"
    },
    "operator": {
      "authorizationOssId": "@string",
      "email": "@string",
      "idBackOssId": "@string",
      "idFrontOssId": "@string",
      "idNo": "@string",
      "name": "@string",
      "phone": "@string"
    }
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };