/**
    修改tap的状态，就是供应商审核tap审核，只能是:L1 3已拒绝,4已确认;Ln 6已确认,7已拒绝
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.put('/api/taps/:tapId/status', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };