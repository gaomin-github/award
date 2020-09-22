
function Foo() {
  getName = function () { alert(1); };
  return this;
}
Foo.getName = function () { alert(2); };
Foo.prototype.getName = function () { alert(3); };
var getName = function () { alert(4); };
function getName() { alert(5); }


//请写出以下输出结果：
Foo.getName();  //3
getName();  //5
Foo().getName();  //3
getName();  //1
new Foo.getName();  //3
new Foo().getName();//3
new new Foo().getName();  //3