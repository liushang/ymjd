// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
var twoSum = function(nums, target) {
    map = new Map()
    for(let i = 0; i < nums.length; i++) {
        x = target - nums[i]
        if(map.has(x)) {
            return [map.get(x),i]
        }
        map.set(nums[i],i)
    }
};

// 链接：https://leetcode-cn.com/problems/two-sum/solution/qiao-yong-jszhong-de-mapdui-xiang-by-ber-qegl/

function get(arr, target) {
    let map = {}
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = i
        if (typeof map[target - arr[i]] === 'number')  res.push([map[target - arr[i]], i])
    }
    console.log(res)
    // const aa = Object.keys(map).map((item) => {
    //     if (typeof map[target - item] === 'number') return [map[item], map[target - item]]
    //     return ''
    // })
    // console.log(aa)
}
console.log(get([2,7,11,15], 17))