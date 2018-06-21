module.exports = function(time) {
  return function(req, res, next) {
    setTimeout(next, time);
  };
};
