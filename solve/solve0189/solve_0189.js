/**
 * @index 189
 * @title 旋转数组
 * @difficulty 中等
 * @tags array,math,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/rotate-array/
 * @frontendId 189
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @date 2021/11/9
 */
 // 双指针排序
var reverse = function(nums, start,end) {
    while(start <= end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}
var rotate = function(nums, k) {
    k %= nums.length
    reverse(nums,0,nums.length-1)
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
};
