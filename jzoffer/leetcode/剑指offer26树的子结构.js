var isSubStructure = function(A, B) {
    //  常规非空判断
    if(!A || !B) {
        return false;
    }
    //  判断A树和B树是否完全相等 或 左边的树包含B树 或 右边的树包含B树
    return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSameTree = function(A, B) {
    // B为空，说明B树被遍历到底部了。证明B树完全存在于A树中。 返回 true
    if(!B) {
        return true;
    }
    // A为空，且不满足上面的判断（即B不为空），说明A树遍历完了还没符合上面的情况，证明B树不存在于这条分支。 返回 false
    if(!A) {
        return false;
    }


    // 当前节点的值不相等，不 ok
    if(A.val !== B.val) {
        return false;
    }

    // 递归考察左子树、右子树
    return isSameTree(A.left, B.left) && isSameTree(A.right, B.right);
};

// 链接：https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/jian-zhi-offer-26-shu-de-zi-jie-gou-by-o-s075/