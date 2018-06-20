/**
    返回供应商审核状态
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/verifyInfo', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "day": "@integer(60, 100)",
    "refuseRemark": "@string",
    "status": "@integer(60, 100)"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };