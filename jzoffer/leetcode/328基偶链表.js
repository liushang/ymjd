/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function (head) {
    if (!head) return head
    let first = head
    let second = head.next // 第二条链的首节点
    let tmp1 = first
    let tmp2 = second
    while (tmp2 && tmp2.next) {
        tmp1.next = tmp2.next // 
        tmp2.next = tmp2.next.next // 我们需要用到第四个节点，比如，对于1，2节点来说，我们要用到第四个节点，所以成为while条件
        // 上述完成拆链过程。
        tmp1 = tmp1.next
        tmp2 = tmp2.next
    }
    tmp1.next = second // 第一条链， 连上 第二条链
    return first
};

// 链接：https://leetcode-cn.com/problems/odd-even-linked-list/solution/javascript-o1-shi-jian-fu-za-du-by-huang-utfd/