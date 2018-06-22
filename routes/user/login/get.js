/**
      Logs user into the system
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.get('/api/user/login', (req, res) => {
        res.json(Mock.mock("@string"));
      });
    };