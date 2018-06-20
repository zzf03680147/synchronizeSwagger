/**
    更新草稿ap 该接口用于批量管理中列表数据编辑页面的保存处理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.put('/api/draftAp/:apId', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };