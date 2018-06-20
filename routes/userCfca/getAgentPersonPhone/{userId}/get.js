/**
    获取经办人手机号
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/userCfca/getAgentPersonPhone/:userId', (req, res) => {
      res.json(Mock.mock({
  "content": "@string",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };