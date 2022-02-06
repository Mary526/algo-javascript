/**
 * @index 1848
 * @title 唯一元素的和
 * @difficulty 简单
 * @tags array,hash-table,counting
 * @draft false
 * @link https://leetcode-cn.com/problems/sum-of-unique-elements/
 * @frontendId 1748
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2022/2/6
 */
var sumOfUnique = function(nums) {
let ansMap = new Map() , summary = 0 
    for(let i = 0 ; i < nums.length ; i++) {
        if(!ansMap.has(nums[i])) {
            ansMap.set(nums[i],1)
        } else {
            ansMap.set(nums[i],ansMap.get(nums[i])+1)
        }
    }

    for([keys,values] of ansMap) {
        if(values > 1) continue
        summary += keys
    }

    return summary
};
