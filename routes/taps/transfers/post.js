/**
    tap支付（转让），从Ln转让给Ln+1
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/taps/transfers', (req, res) => {
      res.json(Mock.mock({
  "content": "@integer(60, 100)",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };