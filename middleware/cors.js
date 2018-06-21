module.exports = function() {
  return function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8090');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Max-Age', 60);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,X-Requested-With');
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  };
};
