/**
 * @index 2116
 * @title 差的绝对值为 K 的数对数目
 * @difficulty 简单
 * @tags array,hash-table,counting
 * @draft false
 * @link https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/
 * @frontendId 2006
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @date 2022/2/9
 */
var countKDifference = function(nums, k) {
let counts = 0

    for(let i = 0 ; i < nums.length ; i++) {
        for(let j = i + 1 ; j < nums.length ; j++ ) {
            if(Math.abs(nums[i] - nums[j]) !== k) continue
            counts++
        }
    }

    return counts
};
