/**
 * @index 2112
 * @title 学生分数的最小差值
 * @difficulty 简单
 * @tags array,sorting,sliding-window
 * @draft false
 * @link https://leetcode-cn.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 * @frontendId 1984
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @date 2022/2/11
 * @return {number}
 */
var minimumDifference = function(nums, k) {
let minSteps = Infinity
    nums.sort((a,b) => a - b)
    for(let i = 0 ; i < nums.length - k + 1 ; i++) {
        const min = nums[i] , max = nums[i + k - 1]
        minSteps = Math.min(max - min,minSteps)
    }
    return minSteps
};
