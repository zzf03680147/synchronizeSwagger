/**
    解析excel中的ap数据保存到草稿ap表中  该接口用于批量上传确认提交处理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/draftAp/resolveExcel/:key', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };