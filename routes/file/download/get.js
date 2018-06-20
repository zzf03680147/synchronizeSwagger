/**
    用户点击下载文件，用token来获取下载文件，会打开浏览器下载功能
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/file/download', (req, res) => {
      res.json(Mock.mock("@string"));
    });
  };