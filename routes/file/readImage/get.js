/**
    文件回显用，通过token来获取文件
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.get('/api/file/readImage', (req, res) => {
      res.json(Mock.mock(undefined));
    });
  };