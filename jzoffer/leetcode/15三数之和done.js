// 1. 排序
// 2. 循环
// 3. 在循环中找到剩下两个值
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;//数组的长度大于3
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){//虽然里面还有两个循环，但是整体的L和R移动的时间内复杂度还是o(n)
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};


// 链接：https://leetcode-cn.com/problems/3sum/solution/15-san-shu-zhi-he-shuang-zhi-zhen-dong-h-e9zz/

function get(arr) {
    // 从小到大排序
    arr = arr.sort((a, b) => a - b)
    console.log(arr)
    let res = []
    for (let i = 0; i<arr.length ; i++) {
        if (arr[i] > 0) break
        // 这里不能比i和i+1 会有遗漏
        if (arr[i-1] === arr[i]) continue
        let [left, right] = [i+1, arr.length - 1]
        while(left < right) {
            // console.log(i, left, right)
            if (arr[i] + arr[left] + arr[right] > 0) {
                right--
            } else if (arr[i] + arr[left] + arr[right] < 0) {
                left++
            } else {
                res.push([arr[i], arr[left], arr[right]])
                right--
                left++
            }
        }
    }
    console.log(res)
}
console.log(get([-1,0,1,2,-4, -1]))
