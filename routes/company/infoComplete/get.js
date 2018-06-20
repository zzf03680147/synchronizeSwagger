/**
    查询供应商资料是否填写完整
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/infoComplete', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };