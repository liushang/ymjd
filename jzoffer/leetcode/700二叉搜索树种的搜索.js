/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if(root == null || root.val == val)
        return root
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val)
};

// 链接：https://leetcode-cn.com/problems/search-in-a-binary-search-tree/solution/pythonjavajavascriptgo-di-gui-by-himymbe-stvf/
