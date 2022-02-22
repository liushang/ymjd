var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for(let num of coins) {
        for(let i=num; i<=amount; i++) {
            dp[i] = Math.min(dp[i],dp[i-num]+1);
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

// 链接：https://leetcode-cn.com/problems/coin-change/solution/wan-quan-bei-bao-de-zui-zhi-wen-ti-wai-c-flro/