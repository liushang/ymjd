function get(str) {
    ans = ''
    for(let i = 0;i < str.length ; i++) {
        let [left, right] = [ i-1, i+1]
        if (str[i] === str[i+1]) {
            left = i
            right = i + 1
            while(str[left] === str[right] && str[left]) {
                ans = right - left + 1 > ans.length ? str.slice(left, right+1) : ans
                left--
                right++
            }
        }
        if (str[i-1] === str[i + 1]) {
            left = i - 1
            right = i+ 1
            while(str[left] === str[right] && str[left]) {
                ans = right - left + 1 > ans.length ? str.slice(left, right + 1) : ans
                left--
                right++
            }
        }
       
    }
    console.log(ans)
}
get('ouuiiupuiu')