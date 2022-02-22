/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  // 虚拟头节点
  let dummy = new ListNode(-1);
  let p = dummy;
  // 两个链表都有值的情况
  while (l1 != null && l2 != null) {
    // 比较 l1 和 l2 两个指针,将值较小的的节点接到 p 指针
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    // p 指针不断前进
    p = p.next;
  }
  p.next = l1 == null ? l2 : l1;
  return dummy.next;
};
  
//   链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/di-gui-he-fei-di-gui-liang-chong-shi-xia-nfnt/

function get(l1, l2) {
    let newList = new ListNode(-1)
    while(l1.next || l2.next) {
        if (li.value > l2.value) {
            newList.next = l2
            l2 = l2.next
        } else {
            newList.next = l1
            l1 = l1.next
        }
        newList = newList.next
    }
}