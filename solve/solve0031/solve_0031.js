/**
 * @index 31
 * @title 下一个排列
 * @difficulty 中等
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/next-permutation/
 * @frontendId 31
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @date 2021/12/7
 */
var nextPermutation = function(nums) {
if(nums.length <= 1) return nums
    let target = nums.length - 1
    for(let i = nums.length - 1;i >= 0;i--){
        if(nums[i - 1] < nums[i]) {
            target = i - 1
            break
        }
    }
    // console.log("target", target)
    //  找到最小的j
    for(let j = nums.length - 1;j >= target + 1;j--) {
        if(nums[j] > nums[target]) {
            const temp = nums[target]
            nums[target] = nums[j]
            nums[j] = temp
            // console.log('nums',j,nums)
            break
        }
    }
    
    // console.log('nums',nums)
    let left = target + 1 , right = nums.length - 1
    if(target === nums.length - 1) {
        left = 0
    }
    while(left < right) {
        const tempNum = nums[left]
        nums[left] = nums[right]
        nums[right] = tempNum
        left++
        right--
    }
};
