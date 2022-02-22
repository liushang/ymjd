/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let memo = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 定义：从 (0, 0) 到 (x, y) 有 dp(x, y) 条路径
  const dp = (x, y) => {
    if (x == 0 && y == 0) return 1;
    if (x < 0 || y < 0) return 0;
    if (memo[x][y] > 0) return memo[x][y];
    // 状态转移方程：到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
    return (memo[x][y] = dp(x - 1, y) + dp(x, y - 1));
  };
  return dp(m - 1, n - 1);
};
  
  
//   链接：https://leetcode-cn.com/problems/unique-paths/solution/dong-tai-gui-hua-6xing-dai-ma-jie-jue-bu-fur8/

const ll = (m, n) => {
  const dp = new Array(m).fill(0).map(x => new Array(n).fill(0))
  for(let i=0;i< m;i++) {
    for(let y=0;y<n;y++) {
      // 注意边缘case当边缘时 只有一种方法
      dp[i][y] = (i < 1 || y < 1 ? 1 : (dp[i-1][y] + dp[i][y-1]))
    }
  }
  return dp[m-1][n-1]
}

console.log(ll(3, 7))