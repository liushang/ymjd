
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 循环两遍
 */
 var sortColors = function (nums) {
  let n = nums.length;
  let index = 0;
  // 从前往后遍历，只要发现有0的数字就交换，同时索引位置增加
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      // 这两句交换都ok
      // [nums[index], nums[i]] = [nums[i], nums[index]];
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }
  // 经过上一轮之后索引位置前的数字都是0了，下一轮遍历就把后面所有1的数字都交换到中间
  for (let i = index; i < n; i++) {
    if (nums[i] == 1) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }
};

// 双指针
var sortColors = function (nums) {
  let n = nums.length;
  // p0表示我前面有多少个元素为0 并确保我前面的元素全部都是0
  let p0 = 0,
    // p1表示我前面有多少个元素为0或者为1 并确保我前面的元素全部都是1
    p1 = 0;
  // i表示我现在遍历到第几个元素了
  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      // 找到了0，就把它与nums[p0]交换
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      // console.log(p0, p1)
      // console.log(nums.toString())
      // 等于0的时候p0和p1都会往后移动，等于1的时候只有p1才会往后移动
      // 如果p0等于p1的话，那肯定是前面交换过去的都是0，那现在p0<p1，那说明前面交换过去的可能有1，现在又把1交换到i的位置去了，启不是又颠倒了吗
      // 所以要跟p1位置交换
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]];
      }
      // console.log(nums.toString())
      p0++;
      p1++;
    } else if (nums[i] == 1) {
      // 因为找到了1而p1表示前面有多少个元素为0或者为1 所以需要后移
      // 把它与nums[p1]交换
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      console.log(nums.toString())
      p1++;
    }
  }
  console.log(nums.toString())
};
  
//   链接：https://leetcode-cn.com/problems/sort-colors/solution/3chong-jie-ti-si-lu-du-shi-shuang-zhi-zh-82wv/
// console.log(sortColors([2,1,0,0]))

const ll = (arr) => {
  // let [ left, right ] = [0, 0]
  // for (let i = 0; i < arr.length ; i++) {
  //   if (arr[i] === 0) {
  //     left++
  //     right++
  //   } else {
  //     if (arr[i] == 2 ) {
        
  //     } else if (arr[i] = 1) {
  //       [arr[i], arr[right]] = [arr[right], arr[i]]
  //       right++
  //     }
  //   }
  // }

}