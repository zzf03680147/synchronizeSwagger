/**
    添加ap，ap状态为暂存；返回数据是ap的id
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/aps', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };