/**
    邀请供应商
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/invite', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };