Function.prototype.call = (context, ...args) => {
  context = typeof context === 'object' ? context : window
  const fn = Symbol()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}

Function.prototype.apply = (context, args) => {
  context = typeof context === 'object' ? context : window
  const fn = Symbol()
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}

Function.prototype.bind = (context, ...args1) => {
  context = typeof context === 'object' ? context : window
  return function (...args2) {
    this.call(context, ...args1, ...args2)
  }
}