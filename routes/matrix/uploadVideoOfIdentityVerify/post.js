/**
    上传读随机数的视频
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/matrix/uploadVideoOfIdentityVerify', (req, res) => {
      res.json(Mock.mock({
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };