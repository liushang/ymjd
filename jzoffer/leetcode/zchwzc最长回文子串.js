// https://www.bilibili.com/video/BV1AA411B7XV?from=search&seid=15773017985579707580&spm_id_from=333.337.0.0
function result(str) {
    let len = str.length
    let max = 1
    console.log(len)
    // !!一定要这么写 不能直接fill([])
    let dp = new Array(len).fill(0).map(() => [])
    let start = 0
    if (len <= 1) return s
    for(let i = 0;i< len;i++) {
        dp[i][i] = true
    }
    // x:0 - len-2   y: 1 - len -1  从左上侧向下向右遍历
    for(let y = 1; y < len; y++) {
        for(let x = 0; x < len -1 && x < y; x++) {
            if (str[x] !== str[y]) {
                dp[x][y] = false
            } else {
                if (y - x < 3) {
                    dp[x][y] = true
                } else {
                    dp[x][y] = dp[x+1][y-1]
                }
            }
            if (dp[x][y] && y - x +1 > max) {
                max = y - x +1
                start = x
            }
        }
    }
    console.log(dp)
    return {
        max,
        start
    }
}
console.log(result('lsslaabaac'))