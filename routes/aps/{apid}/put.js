/**
    更新ap，ap状态必须是：暂存、拒绝、L1拒绝的才能编辑;保存成功返回true
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.put('/api/aps/:apid', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };