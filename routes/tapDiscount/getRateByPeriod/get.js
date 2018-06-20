/**
    供应商-申请贴现时根据输入的周期查询利率
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/tapDiscount/getRateByPeriod', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };