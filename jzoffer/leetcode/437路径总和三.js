// 前缀和+回溯

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function (root, targetSum) {
    let map = new Map();
    let ans = 0;
    dfs(root, 0);
    return ans;
    /**
     *
     * @param {*} root
     * @param {*} presum 前缀和
     * @returns
     */
    function dfs(root, presum) {
      if (!root) {
        return 0;
      }
      map.set(presum, (map.get(presum) || 0) + 1);
      let target = presum + root.val;
      ans += map.get(target - targetSum) || 0;
      // 继续找
      dfs(root.left, target);
      dfs(root.right, target);
      // 回溯 撤销
      map.set(presum, map.get(presum) - 1);
    }
  };
  
  
//   链接：https://leetcode-cn.com/problems/path-sum-iii/solution/qian-zhui-he-hui-su-dai-ma-jian-ji-si-lu-ud4a/