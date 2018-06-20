/**
    批量发行ap，发行ap给L1
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/aps/bulk_publish', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };