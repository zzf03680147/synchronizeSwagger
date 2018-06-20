/**
    签署过的兑付承诺书预览
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/contract/view/commitment/:apId', (req, res) => {
      res.json(Mock.mock("@string"));
    });
  };