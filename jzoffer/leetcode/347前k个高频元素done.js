/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const map = new Map()
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n)+1 : 1)
    })
    // 首先将字典转成数组，然后对数组中的第二个元素（频度）从小到大排序
    const list = Array.from(map).sort((a, b) => b[1] - a[1])
    // 截取频率前k高的元素
    return list.slice(0, k).map(n => n[0])
};
// 链接：https://leetcode-cn.com/problems/top-k-frequent-elements/solution/js-qiao-yong-mapqiu-chu-qian-kge-gao-pin-7fsz/

// 小顶堆