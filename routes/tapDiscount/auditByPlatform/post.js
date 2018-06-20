/**
    平台方审批贴现
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/tapDiscount/auditByPlatform', (req, res) => {
      res.json(Mock.mock({
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };