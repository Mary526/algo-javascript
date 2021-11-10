/**
 * @index 167
 * @title 两数之和 II - 输入有序数组
 * @difficulty 简单
 * @tags array,two-pointers,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @frontendId 167
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * @date 2021/11/10
 */
var twoSum = function(numbers, target) {
let left = 0 , right = numbers.length - 1
    while(left <= right) {
        if (numbers[left]+numbers[right] > target) {
            right--
        } else if (numbers[left]+numbers[right] < target) {
            left++
        } else {
            return [left+1,right+1]
        }
    }
};
