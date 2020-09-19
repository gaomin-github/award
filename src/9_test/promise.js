function myPromise(callback) {
  this.state = 'pending';
  this.res = '';
  this.reason = ''
  callback(this.resolve, this.reject)
}

myPromise.prototype.resolve = function (res) {
  if (this.state === 'pending') {
    this.state = 'fulfil'
    this.res = res;
  }
}

myPromise.prototype.reject = function (res) {
  if (this.state === 'pending') {
    this.state = 'reject'
    this.reson = reson;
  }
}
// 问题：如何知道函数执行结束。回调函数，自己会调用resolve
myPromise.prototype.then = function (callback) {
  if (this.state === 'fulfil') {
    return new Promise(callback)
  }

}

function asyncFun(resolve, reject) {
  setTimeout(() => {
    console.log('async execute', 11)
    return resolve()
  }, 2000)
}

let pro1 = new myPromise(asyncFun)
// pro1.then((res) => {
//   console.log('26', res)
// })
