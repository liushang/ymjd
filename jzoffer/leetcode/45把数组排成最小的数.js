// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function (nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join("");
  };
  
//   链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/1xing-dai-ma-gao-ding-by-angela-x-ajl7/