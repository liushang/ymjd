var merge = function(intervals) {
    // 先按照首元素排序
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        let cur = intervals[i][1];
        // 尾元素和后首元素有重合则合并。并i++
        while(i < intervals.length-1 && cur >= intervals[i+1][0]) {
            cur = Math.max(intervals[i+1][1], cur);
            i++;
        }
        res.push([start, cur]);
    }
    return res;
};

// 链接：https://leetcode-cn.com/problems/merge-intervals/solution/pai-xu-yi-ci-bian-li-by-jin-hei-0t7f/

const ll = (arr) => {
    arr = arr.sort((a, b) => a[0] - b[0])
    for(let i=0;i< arr.length;i++) {
        if (arr[i+1] && arr[i][1] >= arr[i+1][0]) {
            // 数组可以合并
            max = Math.max(arr[i][1], arr[i+1][1])
            let newArr =  [arr[i][0], max]
            arr.splice(i, 2, newArr)
        }
    }
    console.log(arr)
}

console.log(ll([[1,3],[2,6],[8,10],[15,18]]))