


function  maxSubArray2  ( nums ) {
    if (!nums.length) {
        return;
    };
    // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
    let max_ending_here = nums[0];
    let max_so_far = nums[0];

    for (let i = 1; i < nums.length; i ++ ) {
        // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

        max_ending_here = Math.max ( nums[i], max_ending_here + nums[i]);
        max_so_far = Math.max ( max_so_far, max_ending_here);
    };

    return max_so_far;
};

// 链接：https://leetcode-cn.com/problems/maximum-subarray/solution/xiang-xi-jie-du-dong-tai-gui-hua-de-shi-xian-yi-li/

var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        if(sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};

// 链接：https://leetcode-cn.com/problems/maximum-subarray/solution/hua-jie-suan-fa-53-zui-da-zi-xu-he-by-guanpengchn/

const ll = (arr) =>  {
    let [ nowsum, maxsum ] = [0, 0]
    for (let i = 0; i< arr.length; i++) {
        console.log(nowsum, arr[i])
        if (nowsum + arr[i] >= 0) {
            nowsum += arr[i]
            maxsum = Math.max(nowsum, arr[i], maxsum)
        } else {
            nowsum = 0
        }
    }
    console.log(maxsum)
}
ll([5,4,-1,7,8])