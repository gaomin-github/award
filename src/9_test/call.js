// 1.call的实现
let foo = {
  label: "foo",
};
function print() {
  console.log(this.label);
}
// print.call(foo);

// 1.获取调用mycall的函数。利用原型/构造函数。this指向当前对象
Function.prototype.myCall = function(obj, param) {
  obj.fn = this;
  obj.fn();
  // delete obj.fn;
};
// 2.传参

// let i = 1;
// function callTest() {
//   i++;
//   console.log(i, "i");
//   if (i < 5) {
//     arguments.callee();
//   }
// }
// callTest();
// 3.eval用法探究/扩展运算符的实现
let a = [1, 3, 4];
function evalTest() {
  console.log(arguments, 30);
}
// eval(a);
// eval(`evalTest(${a})`);
let b = { id: "123", name: "张三", age: 32 };
eval(`evalTest(${b})`);
