var majorityElement = function (nums) {
    let count = 0;
    let candidate;
    for (let a of nums) {
      if (count == 0) candidate = a;
      count += candidate == a ? 1 : -1;
    }
    return candidate;
  };
  
//   链接：https://leetcode-cn.com/problems/majority-element/solution/mo-er-tou-piao-fa-dai-ma-jian-ji-si-lu-l-tel4/