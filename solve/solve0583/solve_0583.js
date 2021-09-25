/**
 * @index 583
 * @title 两个字符串的删除操作
 * @difficulty 中等
 * @tags string,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/delete-operation-for-two-strings/
 * @frontendId 583
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * @date 2021/9/25
 */
var minDistance = function(word1, word2) {
let dp = Array(word1.length + 1).fill(0).map(()=>Array(word2.length+1).fill(0))

    for(let i = 1;i < dp.length;i++){
        for(j = 1;j < dp[i].length;j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    const max = dp[word1.length][word2.length]
    // console.log("dp:",dp,',max:',max)
    return word1.length + word2.length - 2*max
};
