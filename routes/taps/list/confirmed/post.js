/**
    分页查询tap基本信息，tap列表:已经确认的
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/taps/list/confirmed', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {
        "amount": "@integer(60, 100)",
        "apAmount": "@integer(60, 100)",
        "apId": "@integer(60, 100)",
        "apNo": "@string",
        "apTermsDate": "@datetime",
        "apTradeAmount": "@integer(60, 100)",
        "availableBalance": "@integer(60, 100)",
        "createdTime": "@datetime",
        "creditor": "@integer(60, 100)",
        "expectPayDate": "@datetime",
        "externalNo": "@string",
        "frozenAmount": "@integer(60, 100)",
        "id": "@integer(60, 100)",
        "publisherId": "@integer(60, 100)",
        "publisherName": "@string",
        "remaindDate": "@integer(60, 100)",
        "rootTapNo": "@string",
        "status": "2",
        "statusLabel": "@string",
        "superCompanyId": "@integer(60, 100)",
        "superCompanyName": "@string",
        "tapNo": "@string",
        "type": "1"
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