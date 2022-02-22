function get(str) {
    let arr = [...str]
    let emp = []
    const map = {
        "{": "}",
        '[': ']',
        '(': ')'
    }
    for (let i of arr) {
        if (['(', '{', '['].includes(i)) {
            emp.push(i)
        } else if (i === map[emp[emp.length - 1]]) {
            emp.pop()
        } else {
            console.log('不存在')
            return false
        }
    }
}
get('([)]')
