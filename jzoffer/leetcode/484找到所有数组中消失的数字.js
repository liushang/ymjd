// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

var findDisappearedNumbers = function (nums) {
    // 数组长度
    let n = nums.length;
    for (let a of nums) {
      // 因为数组索引是从0开始的，举例来说，nums = [4,3,2,7,8,2,3,1]，
      // 第一个元素4 正确的索引位置应该放到数组第3位（从0算起），所以x=3
      let x = (a - 1) % n;
      // 现在让对应索引位置的元素加上n   就意味着只要对应索引位置上的元素大于n，就表示出现过，否则就是未出现过
      nums[x] += n;
    }
    let res = [];
    for (let i = 0; i < n; i++) {
      let a = nums[i];
      // 上述遍历操作后，只要出现过1次对应索引位置上元素的值就一定会大于n
      if (a <= n) res.push(i + 1);
    }
    return res;
  };
  
//   链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/solution/ji-qiao-xing-hen-zu-kong-jian-fu-za-du-w-f8m5/