/**
    合同预览（未签署）
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/contract/view/:actorCode/:bizId/:templateId', (req, res) => {
      res.json(Mock.mock("@string"));
    });
  };