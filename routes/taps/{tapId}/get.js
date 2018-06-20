/**
    获取一个tap明细,也就是tap凭证，一般只在L1查看，对于Ln应该查看tap转让单
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/taps/:tapId', (req, res) => {
      res.json(Mock.mock({
  "content": {},
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };