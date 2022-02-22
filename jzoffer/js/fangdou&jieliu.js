function fangdou(fn, time) {
  let timer = null
  return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, time)
  }
}
const test = (a) => {
  console.log(a)
}
const fangtest = fangdou(test, 2000)
// fangtest(5)
// fangtest(6)
// fangtest(7)
// fangtest(8)

function throttle(func, wait) {
  let previous = 0
  return (...args) {
    let now = +new Date()
    if (wait < now - previous) {
      previous = now
      func(...args)
    }
  }
}

const jie = jieliu(test, 3000)
jie(1)
jie(2)
setTimeout(() => {
  jie(3)
}, 3100)