/**
    修改密码
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/changePassword', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };