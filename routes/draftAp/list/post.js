/**
    分页查询草稿ap信息  该接口用于批量管理中列表数据，待完善和已完善列表通过状态去获取
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.post('/api/draftAp/list', (req, res) => {
      res.json(Mock.mock({
  "content": {
    "items": [
      {
        "amount": "@integer(60, 100)",
        "apNo": "@string",
        "createdTime": "@datetime",
        "expectPayDate": "@datetime",
        "externalNo": "@string",
        "goodsDeliveryDate": "@datetime",
        "id": "@integer(60, 100)",
        "paymentTerms": "@integer(60, 100)",
        "publishDate": "@datetime",
        "publisherId": "@integer(60, 100)",
        "publisherName": "@string",
        "remaindDate": "@integer(60, 100)",
        "remark": "@string",
        "status": "0",
        "statusLabel": "@string",
        "supplierId": "@integer(60, 100)",
        "supplierName": "@string",
        "tapId": "@integer(60, 100)",
        "tapNo": "@string",
        "tapStatus": "2",
        "tapStatusLabel": "@string",
        "termsDate": "@datetime",
        "termsStartDate": "@datetime",
        "tradeAmount": "@integer(60, 100)",
        "updatedTime": "@datetime"
      }
    ],
    "orderBy": "@string",
    "pageNum": "@integer(60, 100)",
    "pageSize": "@integer(60, 100)",
    "totalCount": "@integer(60, 100)",
    "totalPage": "@integer(60, 100)"
  },
  "errorCode": "@string",
  "errorMsg": "@string",
  "result": "@string"
}));
    });
  };