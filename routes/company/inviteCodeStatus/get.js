/**
    企业平台--邀请码是否有效
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/inviteCodeStatus', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };