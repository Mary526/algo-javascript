/**
 * @index 416
 * @title 分割等和子集
 * @difficulty 中等
 * @tags array,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/partition-equal-subset-sum/
 * @frontendId 416
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 * @date 2021/12/28
 */
var canPartition = function(nums) {
let s = 0 , n = nums.length

    for( const v of nums) {
        s += v
    }
    // console.log("s", s)

    // 和为奇数，不能平分
    if(s%2 === 1) return false

    let dp = new Array(n+1).fill(0).map(() => new Array(s/2 + 1).fill(false)) 
    dp[0][0] = true

    for(let i = 1 ; i <= n ; i++) {
        for(let j = 0 ; j <= s/2 ; j++) {
            if( j >= nums[i-1]) {
            // console.log("j", j , nums[i-1])
                dp[i][j] = dp[i-1][j-nums[i-1]]
            }
            // 取肩膀上的值 或者肩膀上前一个的值
            dp[i][j] = dp[i][j] || dp[i-1][j]
        }
    }

    // console.log(dp)
    return dp[n][s/2]
};
