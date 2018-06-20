/**
    登出
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/logout2', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };