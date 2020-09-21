// 柯里化介绍：

// 问题：
// 1.并且返回接受余下的参数而且返回结果的新函数;如何在返回函数的同时也返回结果
// 2.返回结果依赖调用函数本身有返回
function curryFun(func) {
  let paramLen = func.length,
    paramList = [];
  curResult = null;
  let cb = function() {
    let args = Array.from(arguments);
    console.log(args, 12);
    paramList.push(...args);
    if (paramList.length === paramLen) {
      return func(...paramList);
    } else {
      return cb;
    }
  };
  return cb;
}

function printName(a, b, c, d) {
  let args = Array.from(arguments);
  let result = args.join("_");
  return result;
}
let newPrint = curryFun(printName);
let newRes = newPrint("2", "5");

console.log(newRes("3")("5"), 32);
