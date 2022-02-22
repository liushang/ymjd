

var detectCycle = function(head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};

// 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/h uan-xing-lian-biao-ii-by-leetcode-solution/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
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
        // 任一一节点指向头节点
        fast = head;
        // 同步向前进
        while (fast != slow) {
          fast = fast.next;
          slow = slow.next;
        }
        // 返回入口节点
        return fast;
      }
    }
    // 不包含环
    return null;   
  };
  
//   链接：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/tu-jie-kuai-man-zhi-zhen-ji-qiao-yuan-li-5tz0/