var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        // 保存当前指针的下一步
        const next = curr.next;
        // 将当前的指针的下一步改为pre
        curr.next = prev;
        // 将pre改为当前指针
        prev = curr;
        // 恢复当前指针
        curr = next;
    }
    return prev;
};

// 链接：https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/

// k个一组翻转链表
var reverseKGroup = function (head, k) {
    let d = new ListNode(-1); //哨兵节点
    d.next = head;
    let font = d;
    while (head) { 
        let rear = font;
        for (let i = 0; i < k; i++) {  //一次转k个
            rear = rear.next;
            if (!rear) return d.next;  //不够k就结束
        }
        let theNext = rear.next;       //记录截取点位置
        [head, rear] = reverseL(head, rear); //翻转链表II
        font.next = head;  //接回原来的链表
        rear.next = theNext;
        font = rear;// 下一轮做铺垫
        head = rear.next;
    }
    return d.next;
};
function reverseL(a, b) {//反转从位置 a 到位置 b 的链表节点
    let prev = b.next;
    let p = a;
    while (prev !== b) {
        let nexts = p.next;
        p.next = prev;
        prev = p;
        p = nexts;
    }
    return [b, a];
}

// 链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/js-die-dai-chuan-zhen-yin-xian-by-liberh-cy0f/

function reverse(a) {
    let pre = null
    let head = a
    while(a !== null) {
        let temp = a.next
        head.next = pre
        pre = head
        a = temp
    }
}

function reverse(a, b) {
    let pre = b.next
    let head = a
    while(pre !== b) {
        let temp = a.next
        head.next = pre
        pre = head
        head = temp
    }
}