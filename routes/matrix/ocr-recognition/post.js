/**
    营业执照OCR识别
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/matrix/ocr-recognition', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "bizLicenseAddress": "@string",
    "bizLicenseCompanyName": "@string",
    "bizLicenseCreditCode": "@string",
    "bizLicenseEndTime": "@string",
    "bizLicenseOperatingPeriod": "@string",
    "bizLicenseOwnerName": "@string",
    "bizLicenseStartTime": "@string",
    "errorCode": "@string"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };