var lowestCommonAncestor = function(root, p, q) {
    if(!root || root===p || root===q) return root;
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q);
    // if(!left && !right) return null;
    // 都在右树
    if(!left) return right;
    // 都在子树
    if(!right) return left;
    return root;
};

// 链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/que-shi-shi-miao-dao-hao-dian-miao-bu-ke-o07g/