// this指向测试
function func1() {
  this.id = '123';
  this.name = 'aaa'
}
let funObj1 = new func1()
console.log(name, 6)
// console.log(funObj1.name)
// func1()
// console.log(name)