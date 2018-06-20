/**
    贴现协议预览接口
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/contract/discountView', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };