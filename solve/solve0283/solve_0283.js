/**
 * @index 283
 * @title 移动零
 * @difficulty 简单
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/move-zeroes/
 * @frontendId 283
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @date 2021/11/10
 */
var moveZeroes = function(nums) {
for(let i = 0;i<nums.length;i++) {
        for(let j = i + 1;j<nums.length;j++) {
            if(nums[i]===0 && nums[j] !== 0) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
};
