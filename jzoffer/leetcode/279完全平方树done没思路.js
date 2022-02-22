// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 

var numSquares = function(n) {
    const dp = [...Array(n+1)].map(_=>0); // 数组长度为n+1，值均为0
    for (let i = 1; i <= n; i++) {
        dp[i] = i; // 最坏的情况就是每次+1
        for (let j = 1; i  >= j * j; j++) { 
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
        }
    }
    return dp[n];
};

// 链接：https://leetcode-cn.com/problems/perfect-squares/solution/hua-jie-suan-fa-279-wan-quan-ping-fang-shu-by-guan/