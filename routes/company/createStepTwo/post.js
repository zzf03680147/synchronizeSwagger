/**
    企业平台--录入supplier步骤2
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/createStepTwo', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };