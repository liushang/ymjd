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