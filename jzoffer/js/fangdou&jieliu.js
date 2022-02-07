function fangdou(fn, time) {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, time)
    } else {
      timer = setTimeout(() => {
        fn(...args)
      }, time)
    }
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

function jieliu(fn, time) {
  let timer = null
  return (...args) => {
    if (!timer) {
      fn(...args)
      timer = setTimeout(() => {
        timer = null
      }, time)
    }
  }
}
const jie = jieliu(test, 3000)
jie(1)
jie(2)
setTimeout(() => {
  jie(3)
}, 3100)