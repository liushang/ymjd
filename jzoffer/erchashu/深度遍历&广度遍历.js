// 深度遍历
let result = [];
let dfs = function (node) {
    if(node) {
        result.push(node.value);
        dfs(node.left);
        dfs(node.right);
    }
}

dfs(tree);
console.log(result); 
// ["-", "+", "a", "*", "b", "c", "/", "d", "e"]
// 中序遍历 左中右
var inListRec = []; //定义保存中序遍历结果的数组
var inOrderRec = function(node) {
    if (node) { //判断二叉树是否为空
        inOrderRec(node.left); //递归遍历左子树
        inListRec.push(node.value); //将结点的值存入数组中
        inOrderRec(node.right); //递归遍历右子树
    }
}
inOrderRec(tree);
console.log(inListRec);
//[ 'a', '+', 'b', '*', 'c', '-', 'd', '/', 'e' ]
// 后序遍历
var postListRec = []; //定义保存后序遍历结果的数组
var postOrderRec = function(node) {
    if (node) { //判断二叉树是否为空
        postOrderRec(node.left); //递归遍历左子树
        postOrderRec(node.right); //递归遍历右子树
        postListRec.push(node.value); //将结点的值存入数组中
    }
}
postOrderRec(tree);
console.log(postListRec);
//[ 'a', 'b', 'c', '*', '+', 'd', 'e', '/', '-' ]
// 非递归形式
let dfs = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.value);
        if(node.right) stack.push(node.right); // 先压入右子树
        if(node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
}
dfs(tree);

// 广度遍历 使用层序遍历

var breadthList = []; //定义保存广度遍历结果的数组
var breadthTraversal = function(node) {
    if (node) { //判断二叉树是否为空
        var que = [node]; //将二叉树放入队列
        while (que.length !== 0) { //判断队列是否为空
            node = que.shift(); //从队列中取出一个结点
            breadthList.push(node.value); //将取出结点的值保存到数组
            if (node.left) que.push(node.left); //如果存在左子树，将左子树放入队列
            if (node.right) que.push(node.right); //如果存在右子树，将右子树放入队列
        }
    }
}
breadthTraversal(tree);
console.log(breadthList);
//[ '-', '+', '/', 'a', '*', 'd', 'e', 'b', 'c' ]

// http://foreverz.cn/2016/10/19/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%8EJavaScript/#%E5%85%88%E5%BA%8F%E9%81%8D%E5%8E%86
