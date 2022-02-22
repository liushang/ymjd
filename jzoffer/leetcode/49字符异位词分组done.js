// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

// 第一步：遍历数组 ；给每个单词排序后放入一个临时数组，跟原数组索引一致；
// 第二步：遍历临时数组，把值一样的 和原数组索引对应的值放入map的value中；
// 第三步: 取出map中的value；

var groupAnagrams = function(strs) {
    const length = strs.length
    const temp = [];
    //第一步：遍历数组 ；给每个单词排序后放入一个临时数组，跟原数组索引一致；
    for(const word of strs) {
        temp.push(word.split('').sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join(''))
    }
    //第二步：遍历临时数组，把值一样的  和原数组索引对应的值放入map的value中；
    const map = new Map();
    for(let i=0; i<length; i++) {
        if(map.get(temp[i])){
            map.get(temp[i]).push(strs[i]);
        }else{
            map.set(temp[i],[strs[i]])
        }
    }
    //第三步: 取出map中的value；
    return Array.from(map.values());
};

// 链接：https://leetcode-cn.com/problems/group-anagrams/solution/bian-li-shu-zu-gei-mei-ge-dan-ci-pai-xu-5ytb6/

const ll = (arr) => {
    // 注意这里通过charcodeat()属性去排序
    const newarr = arr.map(x => x.split('').sort((a, b) => a.charCodeAt()-b.charCodeAt()).join(''))
    console.log(newarr)
    const map = {}
    for (let i=0;i< newarr.length;i++) {
       if (!map[newarr[i]]) {
           map[newarr[i]] = [arr[i]]
       } else {
           map[newarr[i]].push(arr[i])
       }
    }
    const res = Object.keys(map).reduce((cur, item) => {
        console.log(cur)
         cur.push(map[item])
         return cur
    }, [])
    console.log(res)
}
ll(["eat", "tea", "tan", "ate", "nat", "bat"])