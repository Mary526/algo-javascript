/**
 * @index 1019
 * @title 有序数组的平方
 * @difficulty 简单
 * @tags array,two-pointers,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * @frontendId 977
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * @date 2021/11/9
 */
var sortedSquares = function(nums) {
let n = nums.length , ans = Array(n) , left = 0 , right = n - 1 , pos = n - 1
    
    // 负数的，去掉符号，绝对值越大，在升序数组中越靠前
    while(left <= right) {
        if (nums[left] * nums[left] > nums[right] * nums[right]) {
            ans[pos] = nums[left] * nums[left]
            left++
        } else {
            ans[pos] = nums[right] * nums[right]
            right--
        }
        pos--
    }
    return ans
};
