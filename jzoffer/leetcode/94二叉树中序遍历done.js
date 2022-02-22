

// 递归

var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/

// 循环
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        // 收集左边所有节点到数组
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        // 将节点指向当前节点右节点
        root = root.right;
    }
    return res;
};

// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/

const ll = (root) {
    function bb (uu) {
        if (!uu.right && !uu.left) return
        return (bb(uu.left) || []).concat(uu.val).concat((bb(uu.right) || []))
    }
    return bb(root)
}