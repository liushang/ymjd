var moveZeroes = function(nums) {
    nums = nums.sort((a,b) => b? 0: -1)
    console.log(nums)
};
console.log(moveZeroes([0,12,2,1,20,0,2]))