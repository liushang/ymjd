// 请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 使用单调递减栈存放索引
// 不断查看当前温度是否大于栈顶元素的温度
// 若大于，说明找到了第一个高温的天气，栈顶元素出栈，马上更新栈顶元素对应的「后一个更高温度天数」
// 若栈中元素一直没出栈，说明后面没有气温比它还高了，保持初始值0即可

const dailyTemperatures = T => {
    const n = T.length;
    const res = new Array(n).fill(0);
    // 递减栈（存放下标）
    const stack = [0];
    for (let i = 1; i < n; i++) {
        // 当前温度大于栈顶元素的温度
        while (T[i] > T[stack[stack.length - 1]]) {
            // 栈顶元素出栈
            const topIndex = stack.pop();
            // 更新栈顶位置的 后一个更高温度天数
            res[topIndex] = i - topIndex;
        }
        // 当前索引入栈
        stack.push(i);
    }
    return res;
};

// 链接：https://leetcode-cn.com/problems/daily-temperatures/solution/dan-diao-zhan-javascript-by-lzxjack-p7g1/
