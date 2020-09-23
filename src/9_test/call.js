// 1.call的实现
let foo = {
  label: 'foo'
}
function print() {
  console.log(this.label)
}
print.call(foo)