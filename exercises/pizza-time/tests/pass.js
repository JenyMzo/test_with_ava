module.exports = function pizzaMaker (n, cb) {
  if (n < 1) return
  cb()
  pizzaMaker(n - 1, cb)
}
