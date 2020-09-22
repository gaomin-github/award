
// 惰性函数，只调用一次
// 解决方案2，立即执行函数+闭包
let once1 = (function () {
  let task = null;
  return function () {
    if (task) return task;
    task = new Date()
    return task;
  }
})()

// 解决方案3，对象自身属性
function once2() {
  if (once2.task) return once2.task;
  once2.task = new Date()
  return once2.task;
}
// 解决方案4（终极方案）
function once4() {
  let task = new Date();
  once4 = function () {
    return task;
  }
  return task;
}