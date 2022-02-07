var maxProduct = function (nums) {
    const len = nums.length;
    let minNum = 1,
      maxNum = 1;
    let res = -Infinity;
  
    for (let i = 0; i < len; i++) {
      const minTemp = minNum,
        maxTemp = maxNum;
  
      // 当前项小于 0 的情况
      if (nums[i] < 0) {
        // 注意这里需要将 minNum 和 maxNum 互换
        maxNum = Math.max(minTemp * nums[i], nums[i]);
        minNum = Math.min(maxTemp * nums[i], nums[i]);
        res = Math.max(res, maxNum);
      }
      // 当前项等于 0 的情况
      else if (nums[i] === 0) {
        minNum = 1;
        maxNum = 1;
        res = Math.max(res, 0);
      }
      // 当前项大于 0 的情况
      else {
        maxNum = Math.max(maxTemp * nums[i], nums[i]);
        minNum = Math.min(minTemp * nums[i], nums[i]);
        res = Math.max(res, maxNum);
      }
  
      // 上述三种情况可以简化为以下代码
      // maxNum = Math.max(maxTemp * nums[i], minTemp * nums[i], nums[i]);
      // minNum = Math.min(maxTemp * nums[i], minTemp * nums[i], nums[i]);
      // res = Math.max(res, maxNum);
    }
  
    return res;
  };
  
//   链接：https://leetcode-cn.com/problems/maximum-product-subarray/solution/dong-tai-gui-hua-fen-qing-kuang-by-20182-yj8n/