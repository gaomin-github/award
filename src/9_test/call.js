// 1.call的实现
let foo = {
  label: "foo",
};
function print() {
  console.log(this.label);
}
// print.call(foo);

// 1.获取调用mycall的函数。利用原型/构造函数。this指向当前对象(创建对象的研究？)
function MyFunction(label) {
  // this.label = label;
  console.log(this.label, "label", 13);
}
// let MyFunction=new Function('label',console.log(this.lab))
MyFunction.prototype.myCall = function() {
  let params = Array.prototype.slice.call(arguments);
  let curObj = params[0] || Window;
  params.splice(0, 1);
  curObj.fn = this;
  // console.log(arguments.callee, 21);
  // curObj.fn = arguments.callee;

  curObj.fn(...params);
  // delete curObj.fn;
};
// 原型实现对象
function MyFunc1(label) {
  console.log(this.label);
}
MyFunc1.prototype = new MyFunction();
let funcObj1 = new MyFunc1("funcObj1");
// myFunc1=new MyFunction("myFunc1");
let dataObj = {
  label: "dataObj",
};
funcObj1.myCall(dataObj, "age");
function printCall() {
  console.log(this.label, 31);
}
// printCall.myCall(dataObj, "name", "label");

// 2.传参处理
// call传参(obj, p1, p2, p3)
// 可以用扩展运算法实现
// 可以eval(`fn(${arr})`)实现
// bind传参(obj, [p1, p2, p3])

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
// let b = { id: "123", name: "张三", age: 32 };
// eval(`evalTest(${b})`);
