/**
    批量保存到ap正式表 返回数据是ap正式表的id列表用于批量发行时获取列表数据使用  该接口用于批量管理中已完善ap中批量发行按钮处理
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/draftAp/batchSaveToAp', (req, res) => {
      res.json(Mock.mock({
  "content": [
    "@integer(60, 100)"
  ],
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };