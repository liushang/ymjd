
var canJump = function(nums) {
    if(nums.length === 1) return true
    let cover = 0
    for(let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        if(cover >= nums.length - 1) {
            return true
        }
    }
    return false
};

// 链接：https://leetcode-cn.com/problems/jump-game/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-tan-x-mjc9/

const ll = (arr) => {
    let sum = 0
    let result = null
    for (let i=0; i< arr.length; i++) {
        let u = i
        let nowU = i
        console.log('当前节点', i)
        while(u < i + arr[i]) {
            if (sum > arr.length) {
                result = u
                return 
            }
            // 如果当前节点可以跑的长度最长，则下一轮循环用这个节点
            if (u + arr[u] > sum) {
                nowU = u
                sum = u + arr[u]
            }
            u++
        }
        if (i === nowU) {
            console.log('找不到', i)
            return false
        }
        i = nowU
    }
}

console.log(ll([2,3,1,0,4]))
