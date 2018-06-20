/**
    计算并返回申请贴现前相关信息
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/tapDiscount/getInfoBeforeApply', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "period": "@integer(60, 100)",
    "rate": "@integer(60, 100)"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };