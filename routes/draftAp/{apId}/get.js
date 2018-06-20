/**
    查看草稿ap详细， 该接口用于批量管理中列表编辑页面数据处理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/draftAp/:apId', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "apHeader": {
      "amount": "@integer(60, 100)",
      "apNo": "@string",
      "createdTime": "@datetime",
      "expectPayDate": "@datetime",
      "externalNo": "@string",
      "goodsDeliveryDate": "@datetime",
      "id": "@integer(60, 100)",
      "paymentTerms": "@integer(60, 100)",
      "publishDate": "@datetime",
      "publisherId": "@integer(60, 100)",
      "publisherName": "@string",
      "remaindDate": "@integer(60, 100)",
      "remark": "@string",
      "status": "0",
      "statusLabel": "@string",
      "supplierId": "@integer(60, 100)",
      "supplierName": "@string",
      "tapId": "@integer(60, 100)",
      "tapNo": "@string",
      "tapStatus": "2",
      "tapStatusLabel": "@string",
      "termsDate": "@datetime",
      "termsStartDate": "@datetime",
      "tradeAmount": "@integer(60, 100)",
      "updatedTime": "@datetime"
    },
    "auditLog": "@string",
    "invoices": [
      {
        "baseAmount": "@integer(60, 100)",
        "id": "@integer(60, 100)",
        "invoiceAmount": "@integer(60, 100)",
        "invoiceImage": "@string",
        "invoiceNo": "@string"
      }
    ],
    "lines": [
      {
        "amount": "@integer(60, 100)",
        "baseAmount": "@integer(60, 100)",
        "id": "@integer(60, 100)",
        "internalItemCode": "@string",
        "itemDescription": "@string",
        "lineItemSequence": "@integer(60, 100)",
        "quantity": "@integer(60, 100)",
        "unitPrice": "@integer(60, 100)"
      }
    ],
    "receipts": [
      {
        "bizId": "@integer(60, 100)",
        "description": "@string",
        "fileName": "@string",
        "path": "@string"
      }
    ],
    "tradeInfos": [
      {
        "fileName": "@string",
        "path": "@string",
        "seq": "@integer(60, 100)",
        "tradeNo": "@string"
      }
    ]
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };