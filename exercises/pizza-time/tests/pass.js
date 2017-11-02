module.exports = function pizzaMaker(n, cb) {
  if (n < 1) {
    return cb(null, true);
  }
  return cb('error');
};
