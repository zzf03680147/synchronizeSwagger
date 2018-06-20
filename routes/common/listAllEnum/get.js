/**
    返回项目所有的枚举字段的解释
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/common/listAllEnum', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };