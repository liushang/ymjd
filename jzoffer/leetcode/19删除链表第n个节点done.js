
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(!fast)
        return head.next; // 处理 n等于链表长度的异常。
    while(fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

// 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/19-shan-chu-lian-biao-de-dao-shu-di-n-ge-r58z/

function get(h, n) {
    let wholeList = new ListNode(0, h)
    let hou = new ListNode
    let first = new ListNode
    let i = 0
    while(i === n) {
        hou = hou.next
        i ++
    }
    while(hou.next()) {
        first = first.next()
        hou = hou.next()
    }
    // 此时first为倒数第n节点
    first.next = first.next.next
    return wholeList
}