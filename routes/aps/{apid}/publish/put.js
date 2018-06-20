/**
    正式发行ap，发行ap给L1
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.put('/api/aps/:apid/publish', (req, res) => {
      res.json(Mock.mock({
  "content": "@boolean",
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };