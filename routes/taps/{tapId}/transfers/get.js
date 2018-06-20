/**
    获取tap的流转信息，从L1开始到当前Ln
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/taps/:tapId/transfers', (req, res) => {
      res.json(Mock.mock({
  "content": [
    {
      "amount": "@integer(60, 100)",
      "apId": "@integer(60, 100)",
      "auditLog": "@string",
      "level": "@integer(60, 100)",
      "status": "1",
      "tapId": "@integer(60, 100)",
      "tapStatus": "2",
      "tapStatusLabel": "@string",
      "transferFrom": "@string",
      "transferTo": "@string",
      "type": "1",
      "typeLabel": "@string"
    }
  ],
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };