
// https://leetcode-cn.com/problems/VvJkup/solution/pei-yang-chou-xiang-neng-li-java-cpython-u88o/
// 没有重复元素
function quan(arr) {
    let result = []
    let arrLen = arr.length
    help(0, [])
    return result
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
            console.log(control, control.indexOf(nums[i])!=-1)
            if(control.indexOf(nums[i]) != -1 || same.indexOf(i) != -1) continue;
            control.push(nums[i]);
            let newSame = [...same,i];
            let add = [...cur,nums[i]];
            help(idx+1,add,newSame);
        }
    }   
};
console.log(permuteUnique([1,1,2]))