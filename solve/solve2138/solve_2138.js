/**
 * @index 2138
 * @title 数组美丽值求和
 * @difficulty 中等
 * @tags 
 * @draft false
 * @link https://leetcode-cn.com/problems/sum-of-beauty-in-the-array/
 * @frontendId 2012
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/9/20
 */
var sumOfBeauties = function(nums) {
let mins = [] , tempMin = nums[nums.length - 1]
    for(j = nums.length - 1 ; j > 1 ; j--) {
        tempMin = Math.min(tempMin,nums[j])
        mins.unshift(tempMin)
    }
    
    let summary = 0 , max = nums[0]
    for(let i = 1 ; i < nums.length - 1 ; i++) { 
        max = Math.max(max,nums[i - 1])
        const min = mins[i - 1] 
        if (nums[i] > max && nums[i] < min) {
            summary += 2
        } else if (nums[i] > nums[i-1] && nums[i] < nums[i+1]) {
            summary += 1      
        } 
    }   
    return summary
};
