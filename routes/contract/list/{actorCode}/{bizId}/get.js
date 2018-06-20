/**
    获取合同列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/contract/list/:actorCode/:bizId', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "isSigned": false,
    "list": {
      "additionalProp1": "@string",
      "additionalProp2": "@string",
      "additionalProp3": "@string"
    }
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };