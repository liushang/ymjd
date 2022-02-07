

const subsets = (nums) => {
    const res = [];
    const dfs = (index, list) => {
      res.push(list.slice()); // 调用子递归前，加入解集
      for (let i = index; i < nums.length; i++) {
        // 枚举出所有可选的数
        list.push(nums[i]); // 选这个数
        dfs(i + 1, list); // 基于选这个数，继续递归，传入的是i+1，不是index+1
        console.log(list)
        list.pop(); // 撤销选这个数
      }
    };
    dfs(0, []);
    return res;
  };
  
//   链接：https://leetcode-cn.com/problems/subsets/solution/hui-su-suan-fa-de-3chong-shi-xian-du-fei-ghzf/
console.log(subsets([1,2,3]))