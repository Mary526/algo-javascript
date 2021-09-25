/**
 * @index 1250
 * @title 最长公共子序列
 * @difficulty 中等
 * @tags string,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-common-subsequence/
 * @frontendId 1143
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * @date 2021/9/25
 */
var longestCommonSubsequence = function(text1, text2) {
let dp = Array(text1.length + 1).fill(0).map(()=>Array(text2.length + 1).fill(0))

    for(let i = 1;i < dp.length;i++) {
        for(let j = 1; j < dp[i].length;j++) {
            if (text1[i - 1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    return dp[text1.length][text2.length]
};
