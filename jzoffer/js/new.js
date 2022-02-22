function newFunc(fn, ...args) {
    let obj = Object.create(fn.prototype)
    // obj.__proto__ = fn.prototype
    let result = fn.call(obj, ...args)
    return ['object', 'function'].includes(typeof result) ? result : obj
}