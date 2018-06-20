/**
    合作企业管理查询
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/funder/enterprise', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {}
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