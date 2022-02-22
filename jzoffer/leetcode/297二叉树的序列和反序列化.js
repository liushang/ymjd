const deserialize = (data) => {
    const list = data.split(',');   // split成数组
  
    const buildTree = (list) => {   // 基于list构建当前子树
      const rootVal = list.shift(); // 弹出首项，获取它的“数据”
      if (rootVal == "X") {         // 是X，返回null节点
        return null;
      }
      const root = new TreeNode(rootVal); // 不是X，则创建节点
      root.left = buildTree(list);        // 递归构建左子树
      root.right = buildTree(list);       // 递归构建右子树
      return root;                        // 返回当前构建好的root
    };
  
    return buildTree(list); // 构建的入口
  };

  const serialize = (root) => {
    if (root == null) {                  // 遍历到 null 节点
      return 'X';
    }
    const left = serialize(root.left);   // 左子树的序列化结果
    const right = serialize(root.right); // 右子树的序列化结果
    return root.val + ',' + left + ','+ right; // 按  根,左,右  拼接字符串
  };
  
//   链接：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/solution/shou-hui-tu-jie-gei-chu-dfshe-bfsliang-chong-jie-f/