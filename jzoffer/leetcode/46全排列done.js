
// https://leetcode-cn.com/problems/VvJkup/solution/pei-yang-chou-xiang-neng-li-java-cpython-u88o/
// 没有重复元素
function quan(arr) {
    let result = []
    let arrLen = arr.length
    function help(index, newArr) {
        if (newArr.length === arrLen) {
            result.push(newArr)
            return
        }
        let num = []
        for (let i of arr) {
            if (newArr.includes(i)) continue
            num = [...newArr, i]
            help(index++, num)
        }
    }
    help(0, [])
    return result
}
// 有重复元素
var permuteUnique = function(nums) {
    // 回溯法
    let LEN = nums.length;
    let result = [];
    help(0,[],[]);
    return result;
    // 用一个数组记录某个元素( 下标 )是否被取过了
    function help(idx,cur,same) {
        if(idx == LEN) {
            result.push(cur);
            return;
        }
        // control 控制大的for循环分支过程中  不选择相同的数进行分支
        // same 判断求一次结果的过程中该索引是否重复使用
        let control = []; 
        for(let i=0; i < nums.length; i++) {
            if(control.indexOf(nums[i]) != -1 || same.indexOf(i) != -1) continue;
            let newSame = [...same,i];
            let add = [...cur,nums[i]];
            help(idx+1,add,newSame);
        }
    }   
};

// console.log(permuteUnique([1,1,2]))

let ll = (arr) => {
    const res = []
    defs([], arr)
    function defs(val, array) {
        if (val.length === arr.length) {
            res.push(val)
            return
        }
        // array需要重新构造 
        for (let i = 0;i< array.length;i++) {
            if (val.includes(array[i])) continue
            defs(val.concat(array[i]), [...array.slice(0, i), ...array.slice(i+1)])
        }
    }
    return res
}

console.log(ll([1, 2, 3]))

