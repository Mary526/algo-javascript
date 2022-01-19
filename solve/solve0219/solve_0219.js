/**
 * @index 219
 * @title 存在重复元素 II
 * @difficulty 简单
 * @tags array,hash-table,sliding-window
 * @draft false
 * @link https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @frontendId 219
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * @date 2022.1.19
 */
var containsNearbyDuplicate = function(nums, k) {
for(let i = 0 ; i < nums.length ; i++) {
        for(let j = i + 1 ; j < nums.length ; j++) {
            // console.log("i:",nums[i],",j:",nums[j],   Math.abs(i - j),k)
            if(nums[j] === nums[i] && Math.abs(i - j) <= k) {
                return true
            }
        
        }
    }

    return false
};
