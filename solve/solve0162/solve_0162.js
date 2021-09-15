/**
 * @index 162
 * @title 寻找峰值
 * @difficulty 中等
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/find-peak-element/
 * @frontendId 162
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/9.15
 */
var findPeakElement = function(nums) {
const n = nums.length
    // 暴力算法
    // 要注意条件 ： nums[-1] = nums[n] = -∞
    for (let i = 0 ; i < n ; i ++) {
        if (i === 0 && nums[i] > nums[i+1]) return i
        if (i === n - 1 && nums[i] > nums[i-1]) return i
        if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) return i
    }
    return nums.length - 1
};
