const isPalindrome = (head) => {
    if (head == null || head.next == null) {
      return true;
    }
    let fast = head;
    let slow = head;
    let prev;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = null;  // 断成两个链表
    // 翻转后半段
    let head2 = null;
    while (slow) {
      const tmp = slow.next;
      slow.next = head2;
      head2 = slow;
      slow = tmp;
    }
    // 比对
    while (head && head2) {
      if (head.val != head2.val) {
        return false;
      }
      head = head.next;
      head2 = head2.next;
    }
    return true;
  };
//   链接：https://leetcode-cn.com/problems/palindrome-linked-list/solution/shou-hua-tu-jie-hui-wen-lian-biao-kuai-man-zhi-zhe/