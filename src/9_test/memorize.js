// 应用场景：菲波那切数列

// 函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。
let memorize1 = function (fun) {
  let oldResult = [];
  return function () {
    let param = Array.from(arguments)
    if (oldResult[param.join('')]) {
      return oldResult[param.join('')]
    }
    oldResult[param.join('')] = fun.bind(this)(...param)
    return oldResult[param.join('')]
  }
}
function compare(oldP, newP) {
  return oldP.join('') === newP.join()
}

function fibo(n) {
  let result;
  if (n === 1) {
    result = 0;
  } else if (n === 2) {

    result = 1;
  } else {
    result = fibo(n - 1) + fibo(n - 2)
  }
  return result;
}
fibo = memorize1(fibo)
// console.log(fibo(36))
console.log(fibo(36))

