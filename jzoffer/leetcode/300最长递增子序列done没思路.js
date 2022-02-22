
// dp
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        // i与i前面的元素比较
        for (let j = 0; j < i; j++) {
            // 找比i小的元素，找到一个，就让当前序列的最长子序列长度加1
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    // 找出最大的子序列
    let res = 0
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }
    return res
};

// 链接：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-di-zeng-zi-xu-lie-dp-by-zxhnex-9ygh/

// 二分
