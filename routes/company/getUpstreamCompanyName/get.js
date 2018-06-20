/**
    供应商-获取邀请公司名
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/getUpstreamCompanyName', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };