module.exports = function pizzaMaker (n, cb) {
  if (n < 0) return
  cb()
  pizzaMaker(n - 1, cb)
}
