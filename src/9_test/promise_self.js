// 实现参考：https://juejin.im/post/6844903665686282253
// 有问题的点;
// 1.promise中为同步任务时，then注册会失效
// 原因：同步任务，resolve已经执行，但then注册还没有执行
// 修改：在then中也添加判断，父级任务是否执行结束
// 2.同一个promise可以调用多个then
// 需要补充的点
// 1.判断传入then的是否是函数
// typeof func==='function'
// 2.错误处理
// 利用try catch各处添加
// 3.catch方法，finally方法；静态resolve和reject方法，静态all方法，静态race方法；
// es5实现静态方法和内部方法重名？
function myPromise(callback) {
  this.state = "pending";
  this.res = "";
  this.reason = "";
  this.resolveTasks = [];
  this.failTasks = [];
  this.resolve = (res) => {
    try {
      if (this.state === "pending") {
        this.state = "fulfil";
        this.res = res;
        while (this.resolveTasks && this.resolveTasks.length > 0) {
          // console.log(this.tasks, 12);
          let curTask = this.resolveTasks.shift();
          // console.log(curTask, 13);
          curTask(res);
        }
      }
    } catch (err) {
      reject(err);
    }
  };
  this.then = (callback, failCallback) => {
    try {
      // console.log(typeof callback, 27);
      if (typeof callback !== "function") {
        throw new Error("MyPromise must accept a function");
      }
      let that = this;
      return new myPromise((resolve) => {
        // console.log();
        if (that.state === "pending") {
          that.resolveTasks.push((param) => {
            let res = callback(param);
            resolve(res);
          });
          that.failTasks.push((param) => {
            let res = failCallback(param);
            reject(res);
          });
        } else if (that.state === "fulfil") {
          let res = callback(that.res);
          resolve(res);
        } else if (that.state === "reject") {
          let res = failCallback(that.reson);

          resolve(res);
        }
      });
    } catch (err) {
      failCallback(err);
    }
  };
  this.reject = function(res) {
    if (this.state === "pending") {
      this.state = "reject";
      this.reson = res;
    }
  };
  this.catch = function(rejected) {
    return this.then(null, rejected);
  };
  this.finally = function(cb) {
    return this.then(
      (res) => {
        return myPromise.resolve(cb()).then(() => res);
      },
      (err) => {
        return myPromise.reject(cb()).then(() => {
          throw err;
        });
      }
    );
  };
  try {
    callback(this.resolve, this.reject);
  } catch (err) {
    this.reject(err);
  }
}

myPromise.resolve = function(res) {
  return new myPromise((resolve, reject) => {
    return resolve(res);
  });
};

myPromise.reject = function(err) {
  return new myPromise((resolve, reject) => {
    return reject(err);
  });
};

// 问题：如何知道函数执行结束?回调函数，自己会调用resolve
let np1 = new myPromise((resolve, reject) => {
  return resolve("np1");
});
np1.then((res) => {
  console.log(res, 82);
});
np1.then((res) => {
  console.log(res, 85);
});
np1.then((res) => {
  console.log(res, 88);
});
np1.then((res) => {
  console.log(res, 91);
});

// np1
//   .then((res) => {
//     console.log(res, 44);
//     return "task 61";
//   })
//   .then(
//     (res1) => {
//       console.log(res1, 64);
//       throw new Error("resErr 81");
//     },
//     (err1) => {
//       console.log(err1, 89);
//     }
//   )
//   .then(
//     (res) => {},
//     (err) => {
//       console.log(err, 84);
//     }
//   );

// let p1 = new myPromise((resolve, reject) => {
//   console.log("async1 execute", 11, new Date().getTime());
//   setTimeout(() => {
//     return resolve("task1 finish");
//   }, 2000);
// })
//   .then((res) => {
//     console.log("async2 execute", "26", res, new Date().getTime());
//     return "task2 finish";
//   })
//   .then((res) => {
//     console.log("async3 execute", "28", res, new Date().getTime());

//     setTimeout(() => {
//       console.log("async3 settimeout execute", "54", new Date().getTime());
//     }, 4000);
//     return "task";
//   })
//   .then(() => {
//     console.log("async4 execute", "59", new Date().getTime());
//   });
