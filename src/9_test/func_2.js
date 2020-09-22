function Person(name) {
  this.name = name;
}
Person.prototype.printname = function () {
  console.log('name', this.name)

}
let a = new Person('a')
a.printname()
// console.log(a.prototype)
