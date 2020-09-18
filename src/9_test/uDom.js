
function uDom({ data, init }) {

  let keys = Object.keys(data)

  let that = this
  that.init = init.bind(this)
  keys.map(key => {
    that[key] = data[key]
    // console.log(data[key], 7)
    let dep = new Dep()
    Object.defineProperty(this, key, {
      val: data[key],
      set: function (newval) {
        dep.notify()
        console.log(data[key])
      },
      get: function () {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
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

function Watcher(key, fun) {
  // console.log(key, fun, 'watcher')
  let deps = this.deps = []
  if (deps[key]) return;
  Dep.target = this;

  this.exec = function () {
    fun()
  }

}

function Dep() {
  let subs = this.subs = [];
  this.target = null;
  this.addSub = function (sub) {
    console.log('addsub', 50)
    subs.push(sub)
    sub.deps.push(this)
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
    // console.log('init', 72)
    // let that = this;
    // console.log(that, 75)
    new Watcher('name', function () {
      console.log('watcher execute')

      document.body.innerText = `${that.name}`
    }.bind(this))
  }
})
user1.init()

// let id = user1.id
user1.name = '223'
// console.log('uDom import executed')



let importId = '123'
export {
  importId
}