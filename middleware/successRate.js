module.exports = function(rate) {
  return function(req, res, next) {
    if (rate > Math.random()) return next();
    return next(500);
  };
};
