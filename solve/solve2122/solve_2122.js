/**
 * @index 2122
 * @title 统计特殊四元组
 * @difficulty 简单
 * @tags 
 * @draft false
 * @link https://leetcode-cn.com/problems/count-special-quadruplets/
 * @frontendId 5863
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/9/5
 */
var countQuadruplets = function(nums) {
let counts = 0
   
    for(let i=0;i < nums.length - 3;i++) {
    // console.log('i:',i,nums[i])
        for(let j = i+1; j < nums.length -2; j++) {
            // console.log('j',j,nums[j])
            for (k = j + 1 ;k < nums.length -1 ;k++) {
                // console.log('k',k,nums[k])
                for (q = k+1;q<nums.length;q++) {
                    if (nums[i] + nums[j] + nums[k] === nums[q]) {
                        counts++
                    }
                }
                
            }
        }
    }
    return counts
};
