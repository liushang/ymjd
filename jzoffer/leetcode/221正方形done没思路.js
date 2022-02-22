var maximalSquare = function (matrix) {
    let max_len = 0;
    let dp = Array.from(Array(matrix.length), () => Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                max_len = Math.max(max_len, dp[i][j]);
            }
        }
    }
    return max_len ** 2;
};

// 链接：https://leetcode-cn.com/problems/maximal-square/solution/javascript-er-wei-dp-by-liberhome-g12v/