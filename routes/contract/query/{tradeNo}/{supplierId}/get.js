/**
    支付或贴现获取已签署协议列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/contract/query/:tradeNo/:supplierId', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };