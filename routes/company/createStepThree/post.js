/**
    企业平台--录入supplier步骤3
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/createStepThree', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };