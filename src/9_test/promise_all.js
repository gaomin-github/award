promiseAll = function (promises) {
  let resList = [],
    count = 0,
    newp = [];
  newP = promises.map(o => {
    return {
      index: count++,
      handler: o
    }
  })
  return new Promise((resolve, reject) => {
    newP.forEach(o => {
      let curPromise = o.handler
      console.log(o.index, 14)
      curPromise.then((res) => {
        resList[o.index] = res;
        console.log(res, 23)

        count--;
        console.log(count, 20)

        if (count === 0) {
          resolve(resList)

        }
      }, (err) => {
        console.log('reject', 27)
        return reject(err)
      }).catch(e => {
        console.log('error', 30)

        reject('error')
      })
    });

  })
}

function myReq(param) {
  return new Promise((resolve, reject) => {
    let execTime = Number(Math.random().toString().substring(3, 7))
    // console.log('start', param, 20, execTime, `curtime:${new Date().getTime()}`)
    setTimeout(() => {
      console.log('-end-', param, 20, execTime, `curtime:${new Date().getTime()}`)
      if (execTime > 5000) {
        return reject('timeout')
      }
      return resolve({
        param,
        execTime
      })
    }, execTime)
  })
}
// 优雅处理async/await 异常 ,参考：
// https://juejin.im/post/6844903895748050958
async function exe() {
  let reqError;
  let res = await promiseAll([myReq('a'), myReq('b'), myReq('c')]).catch(e => {
    reqError = e;
    console.log(e, 59)
  })
  if (!e) {

  }
  console.log(res, 37)
  // console.log(JSON.stringify(res), 37)

}
exe()
