// 柯里化介绍：

// 问题：
// 1.this丟失
function curryFun(func) {
  let paramLen = func.length,
    paramList = [];
  curResult = null;
  let cb = function() {
    let args = Array.from(arguments);
    paramList.push(...args);

    if (paramList.length === paramLen) {
      return func(...paramList);
    } else {
      return cb;
    }
  };
  return cb;
}

function curryFun2(func) {}

function printName(a, b, c, d) {
  let args = Array.from(arguments);
  let result = args.join("_");
  return result;
}
// let newPrint = curryFun(printName);
// let newRes = newPrint("2", "5");
let TestData = function(name) {
  this.name = name;
  this.print = function(a, b, c, d, e) {
    return `${this.name}:${a}_${b}_${c}_${d}_${e}`;
  };
};
let testObj1 = new TestData("张三");
let testObj2 = new TestData("李四");
let testPrint1 = curryFun(testObj1.print.bind(testObj1));
let testPrint1Res = testPrint1(1)(3)(5, 7)(9);
console.log(testPrint1Res);

let testPrint2 = curryFun(testObj1.print.bind(testObj2));
let testPrint2Res = testPrint2(2)(4)(6, 8)(0);
console.log(testPrint2Res);
