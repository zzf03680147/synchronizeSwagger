/**
    企业平台--录入supplier步骤4
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/company/createStepFour', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "emailChanged": false
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };