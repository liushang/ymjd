// 只能买卖一次

//时间复杂度O(n) 空间复杂度O(n)，dp数组第二维是常数
const maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    dp[0][0] = 0; //第0天不持有
    dp[0][1] = -prices[0]; //第0天持有
    for (let i = 1; i < n; i++) {
        // 前一天没有/前一天有今天卖
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        // 前一天也还有没卖/前一天也没有今天买
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    // 返回最后一天卖完 啥也不剩
    return dp[n - 1][0];
};

// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-wen-ti-by-chen-wei-f-uye0/

// 买卖股票冷冻期
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let n = prices.length
    if (prices.length < 2) return 0
    let dps = []
    for(let i = 0; i < n; ++i) {
      dps.push(new Array(3))
    }
    // dp 表示手头的现金
    // 0: 不是卖出了股票而不持股（可能是之前就不持股，也可能是冷冻期）
    // 1: 持股
    // 2： 不持股是因为今天把股卖了
    dps[0][0] = 0 // 第一天不持股就是0
    dps[0][1] = -prices[0] // 第一天买入股票，金额记为负数
    dps[0][2] = 0
    for(let i = 1; i < n; ++i) {
      // 不可能由1状态转过来
      dps[i][0] = Math.max(dps[i-1][0], dps[i-1][2])
      // 不可能由2状态转过来，因为有冷冻期
      dps[i][1] = Math.max(dps[i-1][0] - prices[i], dps[i-1][1])
      // 只能由1状态转过来
      dps[i][2] = dps[i-1][1] + prices[i]
    }
    // 在买入了股票的状态下，肯定不是我们想要的答案。因为只要不买这个股票，利润会更大。所以不在状态1里选。
    return Math.max(dps[n-1][0], dps[n-1][2])
  };
  
//   链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/309zui-jia-mai-mai-gu-piao-shi-ji-han-le-52tv/

const ll = (arr) => {
    let dp = Array.from(new Array(arr.length), () => new Array(2));
    dp[0][0] = 0
    dp[0][1] = - arr[0]
    for(let i = 1;i< arr.length;i++) {
        dp[i][0] = Math.max(dp[i-1][1] + arr[i], dp[i-1][0])
        dp[i][1] = Math.max(dp[i-1][1], - arr[i])
    }
    return dp[arr.length - 1][0]
}

console.log(ll([7,1,5,3,6,4]))


