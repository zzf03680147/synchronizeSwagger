/**
    展示TAP详情
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/taps/showTap/:tapId', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "amount": "@integer(60, 100)",
    "anchorCompany": {
      "companyBankAccount": "@string",
      "companyBankName": "@string",
      "companyId": "@integer(60, 100)",
      "companyName": "@string",
      "companyUsci": "@string"
    },
    "apAmount": "@integer(60, 100)",
    "apExpectPayDate": "@datetime",
    "apId": "@integer(60, 100)",
    "apNo": "@string",
    "apPublisherId": "@integer(60, 100)",
    "apPublisherName": "@string",
    "apReceiverId": "@integer(60, 100)",
    "apReceiverName": "@string",
    "apTypeLabel": "@string",
    "availableBalance": "@integer(60, 100)",
    "baseTradeInfo": "@string",
    "commitmentLetter": "@string",
    "createdTime": "@datetime",
    "effectiveDate": "@datetime",
    "fromCompany": {
      "companyBankAccount": "@string",
      "companyBankName": "@string",
      "companyId": "@integer(60, 100)",
      "companyName": "@string",
      "companyUsci": "@string"
    },
    "id": "@integer(60, 100)",
    "judgeInfo": "@string",
    "levelOneSupplierCompany": {
      "companyBankAccount": "@string",
      "companyBankName": "@string",
      "companyId": "@integer(60, 100)",
      "companyName": "@string",
      "companyUsci": "@string"
    },
    "platformAuditLevel": "@string",
    "rootTapEffectiveDate": "@datetime",
    "rootTapNo": "@string",
    "status": "2",
    "statusLabel": "@string",
    "tapNo": "@string",
    "toCompany": {
      "companyBankAccount": "@string",
      "companyBankName": "@string",
      "companyId": "@integer(60, 100)",
      "companyName": "@string",
      "companyUsci": "@string"
    },
    "transferNotice": "@string"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };