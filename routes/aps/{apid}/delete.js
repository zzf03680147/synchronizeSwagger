/**
    删除ap，暂存状态才能删除
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.delete('/api/aps/:apid', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };