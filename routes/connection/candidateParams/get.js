/**
    邀请查询参数候选
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/connection/candidateParams', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };