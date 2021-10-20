/**
 * @index 453
 * @title 最小操作次数使数组元素相等
 * @difficulty 简单
 * @tags array,math
 * @draft false
 * @link https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/
 * @frontendId 453
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021.10.20
 */
var minMoves = function(nums) {
nums = nums.sort((a,b)=>a-b)
    let sum = 0 , min = nums[0]

    nums.forEach(item => {
        sum += item - min
    })

    return sum
};
