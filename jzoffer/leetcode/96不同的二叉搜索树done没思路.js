

// dp
const numTrees = (n) => {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      for (let j = 0; j <= i - 1; j++) {
        dp[i] += dp[j] * dp[i - j - 1];
      }
    }
    return dp[n];
  };
  
//   链接：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/shou-hua-tu-jie-san-chong-xie-fa-dp-di-gui-ji-yi-h/

// 卡塔兰数 Cn
var numTrees = function(n) {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};

// 链接：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/

