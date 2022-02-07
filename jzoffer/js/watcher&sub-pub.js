class Subject {
  constructor(name) {
    this.name = name;
    this.observer = []
    this.state = ''
  }
  on(o) {
    this.observer.push(o)
  }
  setState(newState) {
    this.state = newState
    this.observer.forEach(o => o.update(this))
  }
}
class Observer {
  constructor(name) {
    this.name = name
  }
  update(baby) {
    console.log(baby.name + "跟" + this.name + "说：" + baby.state);
  }
}
let baby = new Subject('小宝宝')
let fa = new Observer('爹')
let ma = new Observer('妈')
baby.on(fa)
baby.on(ma)
baby.setState('我ele')

// 主题
class Dep {
  constructor(cb) {
    this.subs = []
    this.cb = cb
  }
  addSub(sub) {
    this.subs.push(sub)
    return this
  }
  notify() {
    this.subs.forEach(item => item.update(this.cb))
  }
}

// 发布者
class Pub {
  constructor() {
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  publish(dep) {
    this.deps.find(d => d === dep).notify()
  }
}

// 订阅者
class Sub {
  constructor(val) {
    this.val = val
  }
  update(cb) {
    this.val = cb(this.val)
    console.log('更新之后:', this.val)
  }
}

let dep1 = new Dep(item => item * item)
dep1.addSub(new Sub(1)).addSub(new Sub(2)).addSub(new Sub(3))

// 新建发布者
let pub = new Pub()
pub.addDep(dep1)

// 发布者发布，通知主题订阅者更新
pub.publish(dep1)


// 简单实现
// 发布者 加主题，并且触发主题
class p {
  constructor() {
    this.zs = []
  }
  addZ(z) {
    this.zs.push(z)
    return this
  }
  publish(z) {
    this.zs.find(x => x === z).notify()
  }
}
// 主题 入参是一个处理函数
class z {
  constructor(cb) {
    this.ss = []
    this.cb = cb
  }
  addS(s) {
    this.ss.push(s)
  }
  notify() {
    this.ss.forEach(x => x.update(cb))
  }
}
// 订阅者 可以无入参
class s {
  constructor(val) {
    this.val = val
  }
  update(cb) {
    cb()
  }
}