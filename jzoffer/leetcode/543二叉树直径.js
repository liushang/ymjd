// 二叉树的直径，就是左右子树的最大深度之和，那么直接的想法是对每个节点计算左右子树的最大高度，得出每个节点的直径，从而得出最大的那个直径。

// 递归
var diameterOfBinaryTree = function(root) {
    let maxHeight = 0
    toSumHeight(root)
    return maxHeight

    function toSumHeight(node) {
        if(!node) return 0
        let sum = 0,leftH = 0,rightH = 0
        leftH = toSumHeight(node.left)
        rightH = toSumHeight(node.right)
        maxHeight = Math.max(leftH + rightH, maxHeight)
        return Math.max(leftH +1,rightH + 1)
    }
};

// 链接：https://leetcode-cn.com/problems/diameter-of-binary-tree/solution/ji-suan-mei-ge-jie-dian-de-shen-du-by-ch-pbo6/
