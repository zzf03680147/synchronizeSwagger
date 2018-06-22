/**
      Finds Pets by tags
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.get('/api/pet/findByTags', (req, res) => {
        res.json(Mock.mock([
  {
    "id": "@integer(60, 100)",
    "category": {
      "id": "@integer(60, 100)",
      "name": "@string"
    },
    "name": "doggie",
    "photoUrls": [
      "@string"
    ],
    "tags": [
      {
        "id": "@integer(60, 100)",
        "name": "@string"
      }
    ],
    "status": "available"
  }
]));
      });
    };