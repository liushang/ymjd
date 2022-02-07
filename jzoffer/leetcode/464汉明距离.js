function getL(x,y) {
    let tx = x.toString(2)
    let ty = y.toString(2)
    let maxL = Math.max(tx.length, ty.length)
    let ltx = tx.padStart(maxL, '0')
    let lty = ty.padStart(maxL, '0')
    console.log(ltx, lty)
    return ltx.split('').reduce((cur, item, index) => {
        if (item ^ lty[index]) cur++
        return cur
    }, 0)
}

console.log(getL(3, 1))