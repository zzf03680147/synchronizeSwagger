/**
    企业平台--录入supplier步骤1
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/createStepOne', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };