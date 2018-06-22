/**
      Returns pet inventories by status
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.get('/api/store/inventory', (req, res) => {
        res.json(Mock.mock({
  "additionalProp1": "@integer(60, 100)",
  "additionalProp2": "@integer(60, 100)",
  "additionalProp3": "@integer(60, 100)"
}));
      });
    };