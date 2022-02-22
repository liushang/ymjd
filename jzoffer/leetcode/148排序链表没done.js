// 将链表分成两个子链表
// 对两个子链表排序后再将它们合并成一个排序的链表

// 归并排序
var sortList = function (head) {
    if (!head || head.next === null) return head;
    // 使用快慢指针找到中间节点
    let slow = head,
      fast = head.next;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    // 将链表分成两半并返回后半部分链表的头节点
    let newList = slow.next;
    slow.next = null;
  
    // 对前后两个链表进行排序
    let left = sortList(head);
    let right = sortList(newList);
    // 将排序好的两个有序链表合并为一个链表
    let res = new ListNode(-1);
    let nHead = res;
    // 合并链表只需要调整指针的指向
    // 两个链表哪个节点的值小就先指向它
    while (left !== null && right !== null) {
      if (left.val < right.val) {
        nHead.next = left;
        left = left.next;
      } else {
        nHead.next = right;
        right = right.next;
      }
      nHead = nHead.next;
    }
    nHead.next = left === null ? right : left;
    return res.next;
  };
  
  
//   链接：https://leetcode-cn.com/problems/sort-list/solution/gui-bing-pai-xu-si-lu-zhi-you-2ju-hua-da-nefu/