/**
      uploads an image
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.post('/api/pet/:petId/uploadImage', (req, res) => {
        res.json(Mock.mock({
  "code": "@integer(60, 100)",
  "type": "@string",
  "message": "@string"
}));
      });
    };