function get(str) {
    let [left] = [0]
    let map = {}
    let ans = 0
    for (let i = 0; i < str.length;i++) {
        // map中存在已有字母
        if (typeof map[str[i]] === 'number') left = map[str[i]] + 1
        map[str[i]] = i
        ans = Math.max(ans, i - left + 1)
    }
    console.log(ans)
}

console.log(get('wpwker'))