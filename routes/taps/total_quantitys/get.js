/**
    查询所有的tap 3状态总数
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/taps/total_quantitys', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "additionalProp1": "@integer(60, 100)",
    "additionalProp2": "@integer(60, 100)",
    "additionalProp3": "@integer(60, 100)"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };