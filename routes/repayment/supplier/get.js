/**
    供应商平台-回款记录
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/repayment/supplier', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {
        "paidAmount": "@integer(60, 100)",
        "paidDate": "@datetime",
        "payNo": "@string",
        "publisher": "@string",
        "tapNo": "@string"
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