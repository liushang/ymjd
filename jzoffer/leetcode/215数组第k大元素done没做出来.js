/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // 整个流程就是上浮下沉
 var findKthLargest = function(nums, k) {
    let heapSize=nums.length
     buildMaxHeap(nums,heapSize) // 构建好了一个大顶堆
     // 进行下沉 大顶堆是最大元素下沉到末尾
     for(let i=nums.length-1;i>=nums.length-k+1;i--){
         swap(nums,0,i)
         --heapSize // 下沉后的元素不参与到大顶堆的调整
         // 重新调整大顶堆
          maxHeapify(nums, 0, heapSize);
     }
     return nums[0]
    // 自下而上构建一颗大顶堆
    function buildMaxHeap(nums,heapSize){
      for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
         maxHeapify(nums,i,heapSize)
      }
    }
    // 从左向右，自上而下的调整节点
    function maxHeapify(nums,i,heapSize){
        let l=i*2+1
        let r=i*2+2
        let largest=i
        if(l < heapSize && nums[l] > nums[largest]){
            largest=l
        }
        if(r < heapSize && nums[r] > nums[largest]){
            largest=r
        }
        if(largest!==i){
            swap(nums,i,largest) // 进行节点调整
            // 继续调整下面的非叶子节点
            maxHeapify(nums,largest,heapSize)
        }78
    }
    function swap(a,  i,  j){
         let temp = a[i];
         a[i] = a[j];
         a[j] = temp;
    }
 };
 
//  时间复杂度：O（nlogk）
//  空间复杂度：O（k）
 
//  链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/xie-gei-qian-duan-tong-xue-de-ti-jie-yi-kt5p2/

// 堆排序
// https://www.bilibili.com/video/BV1Eb41147dK/?spm_id_from=333.788.recommend_more_video.0