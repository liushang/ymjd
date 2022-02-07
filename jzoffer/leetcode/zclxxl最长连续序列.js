// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

const get = (nums) => {
    let delRepet = new Set(nums)
    console.log(delRepet)
    let maxlength = 0
    for (let i of delRepet) {
        let len = 0
        let left = --i
        let right = ++i
        // console.log('right1', right)
        while(delRepet.has(left)) {
            delRepet.delete(left)
            len++
            left--
        }
        // console.log('delRepet.has(right)', delRepet.has(right))
        while(delRepet.has(right)) {
            console.log('right', right)
            delRepet.delete(right)
            len++
            right++
        }
        // console.log(len)
        maxlength = Math.max(maxlength, len)
    }
    return maxlength
}

console.log(get([1,2,3,4,6, 5]))