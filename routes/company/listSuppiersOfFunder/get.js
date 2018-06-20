/**
    找出可能向资金方贴现的所有供应商
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/listSuppiersOfFunder', (req, res) => {
      res.json(Mock.mock({
  "content": [
    {
      "anchorLimit": "@integer(60, 100)",
      "bankAccount": "@string",
      "bankId": "@integer(60, 100)",
      "branchBankCity": "@string",
      "branchBankName": "@string",
      "branchBankProvince": "@string",
      "companyAddress": "@string",
      "companyAddressCity": "@string",
      "companyAddressProvince": "@string",
      "companyCreditReportId": "@string",
      "companyName": "@string",
      "contractId": "@string",
      "createdBy": "@integer(60, 100)",
      "createdDate": "@datetime",
      "creditLevel": "@string",
      "deleteFlag": "@integer(60, 100)",
      "dueDate": "@string",
      "foundDate": "@string",
      "id": "@integer(60, 100)",
      "l1HoldRate": "@integer(60, 100)",
      "legalPersonBackOssId": "@string",
      "legalPersonCreditReportOssId": "@string",
      "legalPersonEmail": "@string",
      "legalPersonFrontOssId": "@string",
      "legalPersonId": "@string",
      "legalPersonName": "@string",
      "legalPersonPhone": "@string",
      "licenceOSSId": "@string",
      "longTermFlag": "@integer(60, 100)",
      "status": "@integer(60, 100)",
      "step": "@integer(60, 100)",
      "supplierReceiveLimit": "@integer(60, 100)",
      "type": "@integer(60, 100)",
      "updatedDate": "@datetime",
      "usci": "@string",
      "validityFrom": "@datetime",
      "validityTo": "@datetime"
    }
  ],
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };