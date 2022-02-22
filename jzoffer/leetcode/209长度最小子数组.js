/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let left = 0,
      sum = 0;
    let minLength = Number.MAX_VALUE;
    for (let right = 0; right < nums.length; right++) {
      // 由于数组中的所有数字都是正整数，因此在子数组中添加新的数字能得到更大的子数组之和
      sum += nums[right];
      // sum>=target 已经是找到了可行解了
      while (left <= right && sum >= target) {
        //  移动左边界，在可行解里面寻找最优解
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left++];
      }
    }
    return minLength == Number.MAX_VALUE ? 0 : minLength;
  };
  
//   链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/tong-su-yi-dong-de-hua-dong-chuang-kou-j-gyhu/