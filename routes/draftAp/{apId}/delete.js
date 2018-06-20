/**
    删除草稿ap 该接口用于批量管理中列表删除处理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.delete('/api/draftAp/:apId', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };