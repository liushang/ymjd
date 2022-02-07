
// dp
var climbStairs = function(n) {
    const dp = [null, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
};

// 链接：https://leetcode-cn.com/problems/climbing-stairs/solution/dong-tai-gui-hua-qiu-jie-by-prefixa-q5w8/