/**
    资金方-复杂条件查询贴现记录
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/tapDiscount/listTapDiscount', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {
        "apId": "@integer(60, 100)",
        "apNo": "@string",
        "applyAmount": "@integer(60, 100)",
        "applyDate": "@datetime",
        "channel": "0",
        "channelLabel": "@string",
        "createdTime": "@datetime",
        "createdUser": "@integer(60, 100)",
        "daysBeforePay": "@integer(60, 100)",
        "discountNo": "@string",
        "fromTapId": "@integer(60, 100)",
        "funderAuditDate": "@datetime",
        "funderId": "@integer(60, 100)",
        "funderName": "@string",
        "id": "@integer(60, 100)",
        "loanAmount": "@integer(60, 100)",
        "loanDate": "@datetime",
        "loanTag": "0",
        "loanTagLabel": "@string",
        "period": "@integer(60, 100)",
        "platformAuditDate": "@datetime",
        "publisherName": "@string",
        "rate": "@integer(60, 100)",
        "status": "10",
        "statusLabel": "@string",
        "supplierId": "@integer(60, 100)",
        "supplierName": "@string",
        "toTapId": "@integer(60, 100)",
        "updatedTime": "@datetime",
        "updatedUser": "@integer(60, 100)",
        "version": "@integer(60, 100)"
      }
    ],
    "orderBy": "@string",
    "pageNum": "@integer(60, 100)",
    "pageSize": "@integer(60, 100)",
    "totalCount": "@integer(60, 100)",
    "totalPage": "@integer(60, 100)"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };