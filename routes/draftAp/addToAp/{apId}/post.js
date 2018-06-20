/**
    新增到ap正式表 返回数据是ap正式表的id 该接口用于批量管理中列表数据编辑页面的下一步，确认并签署协议处理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/draftAp/addToAp/:apId', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };