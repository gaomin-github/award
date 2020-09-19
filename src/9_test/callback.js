function calla(msg, callback2) {
  setTimeout(() => {
    console.log('a')
    callback2()
  }, 2000)
}