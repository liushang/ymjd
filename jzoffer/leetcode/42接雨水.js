var trap = function(height) {
    let ans = 0;
    // 维护一个单调递减栈
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        // 当前高度高于栈顶，说明可以计算积水了
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            // 出栈
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            // 次低栈
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            // 次低栈和当前高哪个低取哪个 再减去最低栈高度
            const currHeight = Math.min(height[left], height[i]) - height[top];
            // 加上当前层面积
            ans += currWidth * currHeight;
        }
        // 前面比当前栈内还要高的都被之前栈内的出栈抵消了
        // 所以当前栈是单调递减的
        stack.push(i);
    }
    return ans;
};

// 链接：https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode-solution-tuvc/