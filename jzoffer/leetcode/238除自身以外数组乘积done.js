
 var productExceptSelf = function (nums) {
    let n = nums.length;
    // res[i] 表示索引 i 左侧所有元素的乘积
    let res = new Array(n);
    // 虚拟存储位，因为索引为0的元素左侧没有元素， 所以 res[0] = 1  方便计算
    res[0] = 1;
    for (let i = 1; i < n; i++) {
      res[i] = nums[i - 1] * res[i - 1];
    }
    // 为右侧所有元素的乘积，刚开始右边没有元素
    let rightAll = 1;
    for (let i = n - 1; i >= 0; i--) {
      // 对于索引 i，左边的乘积为 res[i]，右边的乘积为 rightAll
      res[i] *= rightAll;
      rightAll *= nums[i];
    }
    return res;
  };
  
//   链接：https://leetcode-cn.com/problems/product-of-array-except-self/solution/si-lu-zhi-you-3bu-dai-ma-zhu-shi-xiang-x-xd5k/