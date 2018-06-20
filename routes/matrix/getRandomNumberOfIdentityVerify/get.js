/**
    得到视频认证需要的随机数
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/matrix/getRandomNumberOfIdentityVerify', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };