var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        let cur = intervals[i][1];
        while(i < intervals.length-1 && cur >= intervals[i+1][0]) {
            cur = Math.max(intervals[i+1][1], cur);
            i++;
        }
        res.push([start, cur]);
    }
    return res;
};

// 链接：https://leetcode-cn.com/problems/merge-intervals/solution/pai-xu-yi-ci-bian-li-by-jin-hei-0t7f/