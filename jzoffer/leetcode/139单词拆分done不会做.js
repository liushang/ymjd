// 单词拆分 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s
// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

// dfs遍历
let wordBreak1 = function (s, wordDict) {
    const size = s.length;
    const set = new Set(wordDict);
    // 备忘录
    let memo = new Array(size);
    /* 函数的定义：判断从start到末尾的子串能否break */
    const dfs = (startIndex) => {
      // s一步步成功划分为单词，才走到越界这步，现在没有剩余子串 所以返回真
      if (startIndex == size) return true;
      // 如果备忘录中有值，直接取了返回不再计算
      if (memo[startIndex] != null) return memo[startIndex];
      for (let i = startIndex + 1; i <= size; i++) {
        // 前缀
        let prefix = s.slice(startIndex, i);
        // 前缀部分是单词且剩余子串能break
        if (set.has(prefix) && dfs(i)) {
          memo[i] = true;
          return true;
        }
        // 如果前缀部分不是单词，就不会执行canBreak(i)。进入下一轮迭代，再切出一个前缀串，再试
      }
      // 指针i怎么划分，都没有返回true，则返回false
      memo[startIndex] = false;
      return false;
    };
    // 从0到末尾的子串能否break
    return dfs(0);
  };
  
// 动态规划 
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 1; i <= s.length; i ++) {
        for (let j = 0; j < wordDict.length; j ++) {
            const { length } = wordDict[j]
            // i-length 可以成功 则 i也可以成功
            if (i >= length && s.substr(i - length, length) === wordDict[j]) {
                // 当字典数非常少的时候可以，字典数多也可以 | 字典数多的情况下 减去当前已有的一个字典数的情况下也可以
                dp[i] = dp[i] || dp[i - length]
            }
        }
    }
    return dp[s.length]
};


// 不使用备忘录 优化
const ll = (str, dict) => {
  const res = []
  dict = new Set(dict)
  return defs(0)
  function defs(index) {
    if (index === str.length) return true
    // 注意这里的边界和取值
    for(let i= index + 1; i<= str.length; i++) {
      const pre = str.slice(index , i)
      if (dict.has(pre) && defs(i)) {
        return true
      }
    }
    return false
  }
}
console.log(ll('leetcode', ["leet", "code"]))