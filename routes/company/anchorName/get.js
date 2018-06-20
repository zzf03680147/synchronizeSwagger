/**
    企业平台--获取邀请的核心企业名称
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/anchorName', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };