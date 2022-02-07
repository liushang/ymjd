var searchRange = function(nums, target) {
    var BinarySearch = (nums, target) => {
        let start = 0;
        let end = nums.length - 1;
        while(start <= end){
            let mid = parseInt((start + end) / 2);
            if(nums[mid] == target) return mid;
            else if(nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
    let pos = BinarySearch(nums, target);
    if(pos === -1) return [-1, -1];
    let a = pos, b = pos;
    while(a >= 0 && nums[a] == target) --a;
    while(b < nums.length && nums[b] == target) ++b;
    return [++a, --b];
};

// 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/er-fen-cha-zhao-by-keyueghrkb-e8mf/