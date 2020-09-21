function curryFun(func) {
  return function (params) {
    console.log(params, 3)
  }
}