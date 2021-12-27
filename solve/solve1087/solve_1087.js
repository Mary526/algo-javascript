/**
 * @index 1087
 * @title 最长等差数列
 * @difficulty 中等
 * @tags array,hash-table,binary-search,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-arithmetic-subsequence/
 * @frontendId 1027
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/12/28
 */
var longestArithSeqLength = function(nums) {
let base = 0 , n = nums.length
    for(let v of nums) {
        base = Math.max(base,v)
    }
    let dp = new Array(n).fill(0).map(() => new Array(2*base+2).fill(-1))
    let ans = 2

    for(let i = 1 ; i < n ; i++){
        for(let j = 0 ; j < i ; j++){
            const v = nums[i] - nums[j]+base
            dp[i][v] = Math.max(2 , dp[j][v]+1)
            ans = Math.max(ans , dp[i][v])
        }
    }  
    return ans

};
