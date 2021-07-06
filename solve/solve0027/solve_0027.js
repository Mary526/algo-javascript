/**
 * @index 27
 * @title 移除元素
 * @difficulty 简单
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-element/
 * @frontendId 27
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @date 2021/7/6
 */
var removeElement = function(nums, val) {
    if (nums.length < 1) return 0
    let i = 0
    for( j=0;j<nums.length;j++){
        if(nums[j]!==val) {
            nums[i] = nums[j]
            i++
        }
    }
    // console.log('nums', nums,i)
    return i
};
