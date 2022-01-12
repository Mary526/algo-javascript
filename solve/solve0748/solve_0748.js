/**
 * @index 748
 * @title 至少是其他数字两倍的最大数
 * @difficulty 简单
 * @tags array,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 * @frontendId 747
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2022/1/13
 */
var dominantIndex = function(nums) {
if(nums.length <= 1) return 0
    let max = nums[0] , maxIndex = 0
    for(let i = 1 ; i < nums.length ; i++) {
        if(nums[i] > max) {
            max = nums[i]
            maxIndex = i
        }
    }
    // console.log(max,maxIndex)
    for(let i = 0 ; i < nums.length ; i++) {
        if(i === maxIndex) continue
        if(max < nums[i]*2) return -1
    }
    return maxIndex
};
