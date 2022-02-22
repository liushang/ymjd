// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 回溯剪枝优化
function get(n) {
    const res = []
    deps(n, n, '')
    function deps(left, right, str) {
        console.log(str)
        if (str.length == 2 * n) {
            res.push(str)
            console.log(res)
        }
        if (left > 0) {
            deps(left -1, right, str + '(')
        }
        if (right > left) {
            deps(left, right -1, str + ')')
        }
        
    }
}

get(3)