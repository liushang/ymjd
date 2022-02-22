// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

var longestConsecutive = function(nums) {
    //nums未排序，找出数字连续的最长序列，要求O(n)
    let set = new Set(nums);//数组去重放入set中
    let max_len = 0;
    for(let num of set){//遍历集合
        let len =1;
        // 从中心向两边扩散查找
        let left=num-1,right=num+1;
        while(set.has(left)){
            //找到就删掉，避免重复遍历，导致超时
            set.delete(left);
            left--;
            len++;
        }
        while(set.has(right)){
            set.delete(right);
            right++;
            len++;
        }
        max_len = Math.max(len,max_len);
    }
    return max_len;
};

// 链接：https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/hen-xi-huan-zhe-chong-hen-gui-zheng-de-d-xqvp/

const ll = (oarr) => {
    arr = new Set(oarr)
    let maxlen = 0
    for (let i of arr) {
        if (!arr.has(i - 1)) {
            let len = 0
            let cur = oarr.findIndex(i)
            while(arr.has(i)) {
                i++
                len++
            }
            maxlen = Math.max(maxlen, len)
        }
    }
    console.log(maxlen)
}

console.log(ll([1,2,4,6, 5]))