/**
    支付或贴现获取预览协议列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/contract/initList', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };