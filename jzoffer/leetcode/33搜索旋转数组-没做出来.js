const search = (nums, target) => {
    let [left, right] = [0, nums.length - 1];
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] === target) return mid;
        if (nums[left] < nums[mid]) {
            // 左边是升序的
            if (nums[left] <= target && target <= nums[mid]) {
                // target在升序的里面
                right = mid - 1;
            } else {
                // target不在升序的里面
                left = mid + 1;
            }
        } else {
            // 右边升序
            if (nums[mid] <= target && target <= nums[right]) {
                // target在升序的里面
                left = mid + 1;
            } else {
                // target不在升序的里面
                right = mid - 1;
            }
        }
    }
    return nums[left + 1] === target ? left + 1 : -1;
};

// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/er-fen-fa-javascript-by-lzxjack-o3lj/

// let l = (arr, tar) => {
//     let resultIndex = null
//     const isLeft =  tar >= arr[0]
//     getMid(0, arr.length)
//     function getMid(start, end) {
//         const oarr = arr.slice(start, end)
//         let mid = Math.floor(oarr.length/2)
//         let leftArr = oarr.slice(0, mid)
//         let rightArr = oarr.slice(mid+1)
//         if (isLeft) {
//             if (tar === oarr[mid]) {
//                 resultIndex = mid
//             } else if (tar > oarr[mid]) {
//                 getMid(start, mid)
//             } else {
//                 getMid(mid+1, end)
//             }
//         } else {
//             if (tar === oarr[mid]) {
//                 resultIndex = mid
//             } else if (tar < oarr[mid]) {
//                 getMid(start, mid)
//             } else {
//                 getMid(mid+1, end)
//             }
//         }
//     }
//     console.log(resultIndex)
// }
l([4, 5, 6, 7, 0, 1, 2], 0)