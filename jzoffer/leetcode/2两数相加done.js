function get(l1, l2) {
    const he = 0
    l3 = null
    while(l1.next !== null && l2.next !== null) {
        const num = (l1.next || 0) + (l2.next || 0) + he
        l3.next = new ListNode(num % 10) // 这里要new
        he = num > 9 ? 1 : 0
        l3 = l3.next
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    // 注意这里判断是否还有余1的情况
    if(he > 0) l3.next = new ListNode(he)
}
