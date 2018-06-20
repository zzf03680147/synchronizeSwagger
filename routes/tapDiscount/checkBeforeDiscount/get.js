/**
    贴现前的条件检查
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/tapDiscount/checkBeforeDiscount', (req, res) => {
      res.json(Mock.mock({
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };