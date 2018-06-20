/**
    合同预览（至少一方已签署）
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/contract/view/signed/:contractId', (req, res) => {
      res.json(Mock.mock("@string"));
    });
  };