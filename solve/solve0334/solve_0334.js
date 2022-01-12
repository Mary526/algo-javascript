/**
 * @index 334
 * @title 递增的三元子序列
 * @difficulty 中等
 * @tags greedy,array
 * @draft false
 * @link https://leetcode-cn.com/problems/increasing-triplet-subsequence/
 * @frontendId 334
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 * @date 2022/01/12
 */
var increasingTriplet = function(nums) {
const n = nums.length;
    if (n < 3) {
        return false;
    }
    let first = nums[0], second = Number.MAX_VALUE;
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (num > second) {
            return true;
        } else if (num > first) {
            second = num;
        } else {
            first = num;
        }
    }
    return false;
};
