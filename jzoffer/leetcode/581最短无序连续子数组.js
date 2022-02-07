

// 双指针一次遍历
const findUnsortedSubarray = nums => {
    // 数组长度
    const len = nums.length;
    // low初始化在尾部，high初始化在头部
    let [low, high] = [len - 1, 0];
    // 最小值、最大值初始化
    let [min, max] = [nums[len - 1], nums[0]];
    for (let i = 1; i <= len; i++) {
        // 从后往前更新最小值
        min = Math.min(min, nums[len - 1 - i]);
        // 从前往后更新最大值
        max = Math.max(max, nums[i]);
        // nums[i] < max，说明nums[i]突然不递增了，更新high
        nums[i] < max && (high = i);
        // nums[len - 1 - i] > min，说明nums[len - 1 - i]突然不递减了，更新low
        nums[len - 1 - i] > min && (low = len - 1 - i);
        console.log(high, max, nums[i])
    }
    console.log(low)
    return high > low ? high - low + 1 : 0;
};

console.log(findUnsortedSubarray([1,2,3,-1,4,8,9,7,10,11, 12]))
// 链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/solution/shuang-zhi-zhen-yi-ci-bian-li-javascript-qi5r/

// 先排序
var findUnsortedSubarray = function(nums) {
    const copied = nums.slice(0).sort((a, b) => a - b)
    let i = 0
    let j = nums.length - 1
    while (copied[i] === nums[i] && i < nums.length) {
        i++
    }
    while (copied[j] === nums[j] && j >= 0) {
        j--
    }
    if (i >= j) {
        return 0
    }
    return j - i + 1
};

// 链接：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/solution/javascript-581-zui-duan-wu-xu-lian-xu-zi-ne07/