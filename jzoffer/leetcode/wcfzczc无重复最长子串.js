var lengthOfLongestSubstring = function (s) {
	let ans = 0
	let start = 0
	let end = 0
	let map = new Map()
	while (end < s.length) {
        console.log(start <= map.get(s[end]),s[end], map.get(s[end]), start)
		if (start <= map.get(s[end])) {
            // 找到重复字符，位置从重复处+1开始。此时之前的最大长度已经确定
			start = map.get(s[end]) + 1
		}
		map.set(s[end], end)
		ans = Math.max(ans, end - start + 1)
		end++
	}
	return ans
}

console.log(lengthOfLongestSubstring('wwrbqweer'))