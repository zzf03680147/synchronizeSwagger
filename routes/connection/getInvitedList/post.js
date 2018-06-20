/**
    企业平台--供应商列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/connection/getInvitedList', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };