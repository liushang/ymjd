var titleToNumber = function(columnTitle) {
    let ans = 0;
    for (const c of columnTitle) {
        ans = ans * 26 + (c.charCodeAt() - 64);
    }
    return ans;
};

// 链接：https://leetcode-cn.com/problems/excel-sheet-column-number/solution/da-jia-wan-an-shui-ge-hao-jue-by-chen-xi-mgyu/