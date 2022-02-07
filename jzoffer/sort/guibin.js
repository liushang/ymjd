function merge(leftArr, rightArr) {
  const arr = []
  while(leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      arr.push(leftArr.shift())
    } else {
      arr.push(rightArr.shift())
    }
  }
  return arr.concat(leftArr, rightArr)
}

function guibin(arr) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, mid)
  let rightArr = arr.slice(mid)
  return merge(guibin(leftArr), guibin(rightArr))
}

console.log(guibin([4,2,324,23,1]))