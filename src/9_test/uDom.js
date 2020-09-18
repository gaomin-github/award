
function uDom({ data, init }) {

  let keys = Object.keys(data)

  let that = this
  that.init = init
  keys.map(key => {
    that[key] = data[key]
    // console.log(data[key], 7)
    Object.defineProperty(this, key, {
      val: data[key],
      set: function (newval) {
        console.log(data[key])
      },
      get: function () {
        // console.log('get')
        console.log('get', data[key])
        console.log(this, 18)
        // 注册函数

        return data[key]
      }
    })
  })
  // return data;
}

function watcher(key, fun) {
  let deps = this.deps = []
  if (deps[key]) return;
  Dep.target = this;
  deps.addSub(this);
  this.exec = function () {
    fun()
  }

}

function Dep() {
  let subs = this.subs = [];
  this.target = null;
  this.addSub = function (sub) {
    subs.push(sub)
  }
  this.notify = function () {
    if (subs && subs.length > 0) {
      Object.values(subs).map(sub => {
        sub.exec()
      })
    }
  }
}

let user1 = new uDom({
  data: {
    id: '123',
    name: '用户1'
  },
  init() {
    // let pEl = document.createElement('p')
    // pEl.innerText = `${this.name}`
    // document.body.appendChild(pEl)
    new watcher(name, function () {

      document.body.innerText = `${this.name}`
    })
  }
})
user1.init()
// let id = user1.id
// user1.id = '223'
console.log('uDom import executed')



let importId = '123'
export {
  importId
}