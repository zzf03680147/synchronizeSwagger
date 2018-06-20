/**
    企业平台--获取所有邀请信息
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/allInvitedInfo', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };