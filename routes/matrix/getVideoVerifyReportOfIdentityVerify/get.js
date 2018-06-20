/**
    得到视频认证的结果
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/matrix/getVideoVerifyReportOfIdentityVerify', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "decision": "@string",
    "score": "@integer(60, 100)",
    "source": "@string"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };