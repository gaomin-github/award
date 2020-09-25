// 数组平铺展开
// 1.深度展开
function myFlatten(arr) {
  let res = []
  for (let i in arr) {
    console.log('i', i)
    if (Object.prototype.toString.call(arr[i]) !== '[object Array]') {
      res.push(arr[i])
    } else {
      let newRes = myFlatten(arr[i])
      console.log(newRes, 10)
      res = res.concat(newRes)
    }
  }
  return res;
}
// let testData = myFlatten([1, 2, [3, 9], 10])

// let testData = myFlatten([1, 2, [3, 4, [5, [6, 7], 8], 9], 10])
// 1.指定要展开的深度
function myArrFlatten(arr, depth) {
  let res = []
  for (let i in arr) {
    if (Object.prototype.toString.call(arr[i]) === '[object Array]' && depth > 0) {
      // console.log('arr')
      res = res.concat(myArrFlatten(arr[i], depth - 1))
    } else {
      // console.log('str')
      res.push(arr[i])
    }
  }
  return res;
}
console.log(myArrFlatten([1, 2, [3, 4, [5, [6, 7], 8], 9], 10], 1), 31);

// console.log(testData, 16)

// 数组操作，是否会改变原数组
// 改变：
// splice
// flat
// sort
// 不改变：
// slice
// map