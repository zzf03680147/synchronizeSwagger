/**
    供应商查询交易记录
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/tap_transfers/listTapTransferForSupplier', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {
        "amount": "@integer(60, 100)",
        "createdTime": "@datetime",
        "status": "1",
        "statusLabel": "@string",
        "tapNo": "@string",
        "transferFrom": "@integer(60, 100)",
        "transferFromName": "@string",
        "transferNo": "@string",
        "transferTo": "@integer(60, 100)",
        "transferToName": "@string",
        "type": "1",
        "typeLabel": "@string"
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