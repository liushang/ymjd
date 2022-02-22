
// 解法1 需要保存节点和层级
var levelOrder1 = function(root) {
    if(!root) return []
    const q = [[root, 0]] // 记录节点和层级
    const res = []
    while(q.length) {
        const [n, level] = q.shift()
        if(!res[level]) {
            res.push([n.val])
        } else {
            res[level].push(n.val)
        }
        if(n.left) q.push([n.left, level+1])
        if(n.right) q.push([n.right, level+1])
    }
    return res
};

// 不需要保留
var levelOrder1 = function(root) {
    if(!root) return []
    const q = [root]
    const res = []
    while(q.length) {
        let len = q.length
        res.push([])
        // 使用len来保证能逐层的加进去，而不需要记录每个节点的level
        while(len--) {
            const n = q.shift()
            res[res.length-1].push(n.val)
            if(n.left) q.push(n.left)
            if(n.right) q.push(n.right)
        }
    }
    return res
};

// 链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/js-er-cha-shu-de-ceng-xu-bian-li-by-bert-npd2/
console.log(levelOrder([3,9,20,null,null,15,7]))