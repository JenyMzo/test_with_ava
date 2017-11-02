module.exports = function pizzaMaker (n, cb) {
  if (n < 0) {
    return cb(null, true)
  }
  return cb('error')
}
