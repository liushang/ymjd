var rotate = function(matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};

// 链接：https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/

const ll = (arr) => {
    const len = arr.length
    // 上下旋转
    for(let i = 0;i < Math.floor(len/2);i++) {
        temp =  arr[i]
        arr[i] = arr[len - i - 1]
        arr[len - i - 1] = temp
    }
    console.log(arr)
    for (let i = 0; i< len; i++) {
        // 注意这里的y < i 
        for (let y = 0; y < i; y++) {
            [arr[i][y], arr[y][i]] = [arr[y][i], arr[i][y]]
        }
    }
    console.log(arr)
}

console.log(ll([[1,2,3],[4,5,6],[7,8,9]]))