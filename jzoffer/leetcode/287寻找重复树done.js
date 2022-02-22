// 由索引找到元素，再将这个元素作为索引，继续找下一个元素，...
// 因为数组中有重复元素，故最终会形成一个循环，和有环链表思路差不多。

// 定义快慢指针，快指针一次走2步，慢指针一次走1步
// 当快慢指针相遇时，将快指针放到起始位，并调整为1次1步
// 当两指针再次相遇时，就会在环入口处相遇
// 本题中，环入口就是重复的数字
const findDuplicate = nums => {
    let [slow, fast] = [0, 0];
    slow = nums[slow];
    fast = nums[nums[fast]];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
};

// 链接：https://leetcode-cn.com/problems/find-the-duplicate-number/solution/shuang-zhi-zhen-si-lu-javascript-by-lzxj-p2be/