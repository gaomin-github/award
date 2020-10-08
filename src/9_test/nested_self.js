// 1）实现get函数，用来获取深浅套对象值
// var object = { 'a': [{ 'b': { 'c': 3 } }] };
// get(object, 'a[0].b.c');
//应该返回 3

function myGet(obj, keyStr) {
  let keyArr = keyStr.split(".");
  let curObj = obj;
  for (let key in keyArr) {
    curObj = curObj.key || {};
  }
}
