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
  
// 快慢指针
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  // 快慢指针初始化指向 head
  let slow = head;
  let fast = head;
  // 快指针走到末尾时停止
  while (fast && fast.next) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
    // 快慢指针相遇，说明含有环
    if (slow == fast) {
      return true;
    }
  }
  // 不包含环
  return false;
};

// 链接：https://leetcode-cn.com/problems/linked-list-cycle/solution/kuai-man-zhi-zhen-fa-dai-ma-zhong-zhu-sh-cdst/
