module.exports = function pizzaMaker (n, cb) {
  if (n < 2) return
  cb()
  pizzaMaker(n - 1, cb)
}
