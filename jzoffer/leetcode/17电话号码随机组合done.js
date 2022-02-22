function get(str) {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i']
    }
    const arr = str.split('')
    const res = []
    defs(0, '')
    function defs(index, str) {
        if (str.length === arr.length) {
            res.push(str)
        } else {
            for (let i = index;i < arr.length; i++) {
                for (let y = 0;y< map[arr[i]].length; y++) {
                    defs(i + 1, str + map[arr[i]][y])
                }
            }
        }
    }
    console.log(res)
}
get('23')