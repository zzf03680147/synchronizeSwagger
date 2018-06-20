/**
    省市信息列表
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/company/getRegionList', (req, res) => {
      res.json(Mock.mock({
  "additionalProp1": [
    "@string"
  ],
  "additionalProp2": [
    "@string"
  ],
  "additionalProp3": [
    "@string"
  ]
}));
    });
  };