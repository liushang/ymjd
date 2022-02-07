

var canJump = function(nums) {
    let reach = nums[0]
    for (let i = 1; i < nums.length; i ++) {
        const to = nums[i] + i
        if (i > reach) {
            return false
        } else {
            reach = Math.max(to, reach)
        }
    }
    return true
};

// 链接：https://leetcode-cn.com/problems/jump-game/solution/javascript-55-tiao-yue-you-xi-by-scnu_ev-tw5j/