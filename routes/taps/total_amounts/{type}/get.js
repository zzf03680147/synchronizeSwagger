/**
    获取creditor持有的tap的总额
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/taps/total_amounts/:type', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };