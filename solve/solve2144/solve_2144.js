/**
 * @index 2144
 * @title 增量元素之间的最大差值
 * @difficulty 简单
 * @tags 
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-difference-between-increasing-elements/
 * @frontendId 5881
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/9/26 
 */
var maximumDifference = function(nums) {
let max = -1 , temp = -1 
    for(let i = 0 ; i < nums.length ;i++) {
        for(let j = i + 1; j < nums.length ; j++) {
            if (nums[j] > nums[i]) {
                temp = nums[j] - nums[i]
                max = Math.max(max,temp)
            }
        }
    }
    return max
};
