/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((a,b) => a + b)
    let num = 3
    let temp = 0
    for(let a of arr){
        temp += a
        if (temp === sum / 3) num--, temp = 0
    }
    return num <=  0
};

// 链接：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/solution/jiang-shu-zu-fen-cheng-he-xiang-deng-de-g31zi/