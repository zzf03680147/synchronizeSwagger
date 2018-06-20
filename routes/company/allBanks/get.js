/**
    所有银行列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/allBanks', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };