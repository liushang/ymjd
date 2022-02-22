// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。


var minPathSum = function (grid) {
    let m = grid.length,
      n = grid[0].length;
    // 构造备忘录，初始值全部设为 -1
    let memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
    const dp = (i, j) => {
      // base case
      if (i == 0 && j == 0) {
        return grid[0][0];
      }
      // 如果索引出界，返回一个很大的值，保证在取 min 的时候不会被取到
      if (i < 0 || j < 0) {
        return Number.MAX_SAFE_INTEGER;
      }
      // 避免重复计算
      if (memo[i][j] != -1) {
        return memo[i][j];
      }
      // 将计算结果记入备忘录
      memo[i][j] = Math.min(dp(i - 1, j), dp(i, j - 1)) + grid[i][j];
      // 左边和上面的最小路径和加上 grid[i][j],就是到达 (i, j) 的最小路径和
      return memo[i][j];
    };
    // 计算从左上角走到右下角的最小路径和
    return dp(m - 1, n - 1);
  };
  
//   链接：https://leetcode-cn.com/problems/minimum-path-sum/solution/dong-tai-gui-hua-qiu-zui-xiao-lu-jing-he-dqq5/

const ll = (arr) => {
  const dp = new Array(arr.length).fill(0).map(x => new Array(arr[0].length).fill(0))


  for(let m = 0;m < arr.length; m++) {
    for(let n = 0;n < arr[0].length; n++) {
      // 边缘值注意取好
      if (m == 0) {
        dp[0][n] = (n === 0 ? 0 : dp[0][n -1]) + arr[0][n]
      } else if (n == 0) {
        dp[m][0] = (m === 0 ? 0 : dp[m -1][0]) + arr[m][0]
      } else {
        dp[m][n] = Math.min(dp[m][n-1] + arr[m][n], dp[m-1][n] + arr[m][n])
      }
    }
  }
  return dp[arr.length - 1][arr[0].length - 1]
}

console.log(ll([[1,3,1],[1,5,1],[4,2,1]]))