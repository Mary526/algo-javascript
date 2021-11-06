/**
 * @index 268
 * @title 丢失的数字
 * @difficulty 简单
 * @tags bit-manipulation,array,hash-table,math,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/missing-number/
 * @frontendId 268
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/11/6
 */
var missingNumber = function(nums) {
nums = nums.sort((a,b)=>{return a-b})
    let n = Math.max(nums.length,nums[nums.length-1])

    // console.log("n:",n,',nums:',nums)

    for(let i = 0;i < nums.length ;i++) {
        if (nums[i]!== i) return i
    }
    return n
};
