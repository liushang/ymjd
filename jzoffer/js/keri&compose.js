function keri(fn) {
  const junge = (...args) => {
    if (fn.lenth === args.length) return fn(...args)
    return (...arg) => fn(...args, ...arg)
  }
  return junge
}
const ku = (a,b,c,d) => {
  console.log(a, b, c, d)
}
let oo = keri(ku)()
// oo(1)
// oo(2)
// oo(3)

function compose(...funcs) {
  if (funcs.length === 0) return arg => arg
  if (funcs.length === 1) return funcs[1]
  return funcs.reduce((cur, item) => (...args) => item(cur(...args)))
}

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

let result = compose(f1, f2, f3)(0)
console.log(result)