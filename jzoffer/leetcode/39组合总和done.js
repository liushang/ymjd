// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

var combinationSum = function(candidates, target) {
    // path的作用是缓存之前的数 sum缓存之前的和
    const res = [], path = [];
    candidates.sort(); // 排序
    backtracking(0, 0);
    return res;
    function backtracking(j, sum) {
        if (sum > target) return;
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        for(let i = j; i < candidates.length; i++ ) {
            const n = candidates[i];
            if(n > target - sum) continue;
            path.push(n);
            sum += n;
            backtracking(i, sum);
            path.pop();
            sum -= n;
        }
    }
};

// 链接：https://leetcode-cn.com/problems/combination-sum/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-7tum/

// dp
var combinationSum = function(candidates, target) {
    const n = candidates.length;
    const g = new Array(target + 1);
    g[0] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= target; j++) {
            if (g[j] === undefined) g[j] = [];
            const pre = j - candidates[i];
            if (pre < 0) continue;
            if (g[pre] === undefined) g[pre] = [];
            if (g[pre].length === 0 && pre === 0) {
                g[j].push([candidates[i]]); // target刚好等于当前物品
            } else {
                const t = [];
                for (const item of g[pre]) {
                    const tt = Array.from(item); // 拷贝
                    tt.push(candidates[i]);
                    t.push(tt);
                }
                g[j].push(...t);
            }
        }
    }
    return g[target];
};

// 链接：https://leetcode-cn.com/problems/combination-sum/solution/dong-tai-gui-hua-bei-bao-wen-ti-by-sjtxw-11yv/

let ll = (arr, tar) => {
    const res = []
    defs([], 0, 0) 
    function defs(val, index, sum) {
        val = val.slice()
        if (sum === tar) {
            res.push(val)
            return 
        } else if (sum > tar) {
            return
        }
        for (let i = index; i< arr.length;i++) {
            defs(val.concat(arr[i]), i, sum + arr[i])
        }
    }
    console.log(res)
}
ll([2,3,6,7], 7)