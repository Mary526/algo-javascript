/**
 * @index 300
 * @title 最长递增子序列
 * @difficulty 中等
 * @tags array,binary-search,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @frontendId 300
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2022/1/4
 */
var lengthOfLIS = function(nums) {
let res = 1 , n = nums.length , dp = new Array(n).fill(0)
    dp[0] = 1
    // console.log("dp:", dp)

    for(let i = 1 ; i < nums.length ; i++) {
        dp[i] = 1
        for(let j = 0 ; j < i ; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            } 

        }
        // console.log("dp:", i , dp)
        res = Math.max(dp[i],res)
    }      

    return res
};
