// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

//  递归法
// 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  // 如果是空节点
  if (!root) return true;
  // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST(所以判断条件是<=而非<，同样是>=而非>)
  if (root.val <= min || root.val >= max) return false;
  // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
  
//   链接：https://leetcode-cn.com/problems/validate-binary-search-tree/solution/wu-xing-dai-ma-qing-song-gao-ding-yan-zh-16b5/

function ll(root, min = -Infinity, max = Infinity) {
  if (!root) return true
  if (root.val > min && root.val < max) {
    return true
  } else {
    return false
  }
  return ll(root.left, min, root.val) && ll(root.right, root.val, max)
}
