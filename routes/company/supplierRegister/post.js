/**
    供应商注册
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/supplierRegister', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };