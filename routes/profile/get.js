/**
    得到当前登录用户的基本信息
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/profile', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "actorId": "@integer(60, 100)",
    "companyId": "@integer(60, 100)",
    "companyName": "@string",
    "companyTypeList": [
      "0"
    ],
    "email": "@string",
    "firstLogin": false,
    "ifL1": false,
    "ifLn": false,
    "type": "0"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };