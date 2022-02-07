// 给你一个链表的头节点，判断链表中是否有环

// JSON.stringify(head) 秒杀法
var hasCycle = function (head) {
    try {
        JSON.stringify(head)
    } catch{
        return true
    }
    return false
};

// 标记法 给遍历过的节点打记号，如果遍历过程中遇到有记号的说明已环
const hasCycle = function(head) {
    while (head) {
      if (head.tag) {
        return true;
      }
      head.tag = true;
      head = head.next;
    }
    return false;
  };
  
