var countBits = function(n) {
    let ans = []
    for(let i=0;i<=n;i++){
        ans.push(i.toString(2).replace(/0/g,'').length)
    }
    return ans
};

// 链接：https://leetcode-cn.com/problems/counting-bits/solution/js-apida-fa-by-fan-xiao-fan-fm-nqye/