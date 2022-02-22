const rob = nums => {
    // 数组长度
    const len = nums.length;
    // dp数组初始化
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    // 从下标2开始遍历
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};

// 链接：https://leetcode-cn.com/problems/house-robber/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-dong-ezvt3/