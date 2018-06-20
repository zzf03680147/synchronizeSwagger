/**
    资金方平台-还款管理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/repayment/funder', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {
        "expectPayDate": "@datetime",
        "expiredDays": "@integer(60, 100)",
        "interest": "@integer(60, 100)",
        "paidAmount": "@integer(60, 100)",
        "payAmount": "@integer(60, 100)",
        "publisher": "@string",
        "status": "@integer(60, 100)",
        "statusLabel": "@string",
        "transferNo": "@string"
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