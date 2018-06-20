/**
    邀请状态码下拉列表数据
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/connection/invitationStatus', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };