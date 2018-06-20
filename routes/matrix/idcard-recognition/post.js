/**
    身份证OCR识别
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/matrix/idcard-recognition', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "name": "@string",
    "ssn": "@string"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };