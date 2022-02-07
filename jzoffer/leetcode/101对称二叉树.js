
var isSymmetric = function (root) {
    let check = (p, q) => {
      if (p == null || q == null) return p==q;
      // 每个树的右子树都与这棵树的左子树镜像对称
      return p.val == q.val && check(p.left, q.right) && check(p.right, q.left);
    };
    return check(root, root);
  };
  
//   链接：https://leetcode-cn.com/problems/symmetric-tree/solution/san-ju-hua-jie-jue-dui-cheng-er-cha-shu-qw7o5/