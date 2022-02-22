// 双指针 两边比小收缩
function get(arr) {
    let [left, right] = [0, arr.length - 1]
    let area = 0
    while(left < right) {
        area = Math.max(area, (right - left) * Math.min(arr[right], arr[left]))
        if (arr[right] > arr[left]) {
            left ++
        } else {
            right--
        }
    }
}