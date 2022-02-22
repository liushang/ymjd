Promise.prototype.all = function(arr) {
    return new Promise((resolve, reject) => {
        let result = []
        for(let i = 0;i < arr.length;i++) {
            Promise.resolve(arr[i]).then((res) => {
                result[i] = res
                if (result.length === arr.length) {
                    resolve(res)
                }
            }).catch(err => reject(err))
        }
    })
}

Promise.prototype.finally = function (cb) {
    return this.then(
        (val) => Promise.resolve(cb).then(() => val),
        (err) => Promise.resolve(cb).then(() => throw err)
    )
}