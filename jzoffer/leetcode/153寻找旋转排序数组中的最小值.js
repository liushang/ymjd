var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (nums[pivot] < nums[high]) {
            high = pivot;
        } else {
            low = pivot + 1;
        }
    }
    return nums[low];
};

// 链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/