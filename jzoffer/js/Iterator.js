let it = itFunc(['a', 'b'])
function itFunc(arr) {
    let left = 0
    return {
        next: () => {
            return left < arr.length ? {
                value: arr[left++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}

console.log(it.next())
console.log(it.next())
console.log(it.next())