/**
    获取邀请状态下拉列表数据
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/invitationStatusInfo', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };