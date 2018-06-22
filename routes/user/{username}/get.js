/**
      Get user by user name
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.get('/api/user/:username', (req, res) => {
        res.json(Mock.mock({
  "id": "@integer(60, 100)",
  "username": "@string",
  "firstName": "@string",
  "lastName": "@string",
  "email": "@string",
  "password": "@string",
  "phone": "@string",
  "userStatus": "@integer(60, 100)"
}));
      });
    };