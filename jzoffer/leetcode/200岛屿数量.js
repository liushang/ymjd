/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "1") {
          count++;
          turnZero(grid, i, j);
        }
      }
    }
    return count;
  };
  function turnZero(grid, i, j) {
    if (
      // 超出过些边界
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      // 已经是海水了
      grid[i][j] === "0"
    )
      return;
    // 将 (i, j) 变成海水
    grid[i][j] = "0";
    // 淹没上下左右的陆地
    // 为什么每次遇到岛屿，都要用 DFS 算法把岛屿「淹了」呢？主要是为了省事，避免维护visited数组。
    turnZero(grid, i + 1, j); //上
    turnZero(grid, i - 1, j); // 下
    turnZero(grid, i, j - 1); //左
    turnZero(grid, i, j + 1); //右
  }
  
//   链接：https://leetcode-cn.com/problems/number-of-islands/solution/dfsjie-jue-dao-yu-shu-liang-wen-ti-by-an-hhcn/