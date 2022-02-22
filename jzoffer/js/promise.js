function debounce(caller, wait) {
    let timer = null, promise = null, resolve = null
    let pointer = this, newArgs = []
    const createPromise = function () {
        return new Promise(r => {
            resolve = r;
        })
    }
    return function(...args) {
        pointer = this
        newArgs = args
        clearTimeout(timer)
        timer = setTimeout(() => {
            const res = caller.apply(pointer, newArgs)
            promise = null
            resolve()
        }, wait)
        if (!promise) promise = createPromise()
        return promise
    }
}

// test
const stime = Date.now()
const fn = debounce(function(str) { console.log(str, Date.now() - stime) }, 1000 )

// fn('1111')
// setTimeout(() => {
//     fn('2222')
// }, 500)
// setTimeout(() => {
//     fn('33333')
// }, 1000)

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise (fn) {
    let self = this
    self.status = 'pending'
    self.value = null
    self.resolveCb = []
    self.rejectCb = []
    function resolve (val) {
        // !判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if (val instanceof myPromise) {
          return val.then(resolve, reject);
        }
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = RESOLVED
                self.value = val
            }
            self.resolveCb.length && self.resolveCb.map(i => i(val))
        }, 0)
    }
    function reject(val) {
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = REJECTED
                self.value === val
            }
            self.rejectCb.length && self.rejectCb.map(i => i(val))
        }, 0)
    }
    try {
        fn(resolve, reject)
    } catch (error) {
        reject(error)
    }
    // this.then = function(onResolve, onReject) {

    // !这里要判断onResolve, onReject的类型是不是函数
    // onResolve = typeof onResolve === 'function' ? onResolve : (val) => val
    // onReject = typeof onReject === 'function' ? onReject : (err) => throw err

    //     if (this.status === 'resolved') {
    //         onResolve(this.val instanceof myPromise ? this.val.then(onResolve, onReject) : this.val)
    //     } else {
    //         onReject(this.val instanceof myPromise ? this.val.then(onResolve, onReject) : this.val)
    //     }
    // }
}
myPromise.prototype.then = function(onResolve, onReject) {
    let self = this
    return new myPromise((resolve, reject) => {
        let resolveResult = () => {
            try {
                let result = onResolve(self.value)
                return result instanceof myPromise ? result.then(resolve, reject) : resolve(result)
            } catch (err) {
                reject(err)
            }
        }
        let rejectResult = () => {
            try {
                let result = onReject(self.value)
                return result instanceof myPromise ? result.then(resolve, reject) : reject(result)
            } catch (err) {
                reject(err)
            }
        }
        switch(self.status) {
            case RESOLVED:
                resolveResult()
            case REJECTED:
                rejectResult()
            case PENDING:
                self.resolveCb.push(resolveResult)
                self.rejectCb.push(rejectResult)
        }
    })
}

new myPromise((resolve) => {
    resolve(4)
}).then((res) => {
    console.log('res', res)
})