/**
 * @index 72
 * @title 编辑距离
 * @difficulty 困难
 * @tags string,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/edit-distance/
 * @frontendId 72
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * @date 2021/12/29
 */
var minDistance = function(word1, word2) {
let n = word1.length , m = word2.length

    if(n * m === 0) return n + m
    let dp = new Array(n + 1).fill(0).map(()=> new Array(m + 1).fill(0))

    // 纵向
    for(let i = 0 ; i < n + 1 ; i++) {
        dp[i][0] = i
    }
    // 横向
    for(let j = 0 ; j < m + 1 ; j++) {
        dp[0][j] = j
    }

    for(let i = 1 ; i < n + 1 ; i++) {
        for(let j = 1 ; j < m + 1 ; j++) {
            const left = dp[i-1][j] + 1
            const down = dp[i][j-1] + 1
            let leftDown = dp[i-1][j-1]
            if(word1.charAt(i - 1) !== word2.charAt(j - 1)) {
                leftDown += 1
            }
            dp[i][j] = Math.min(left , Math.min(down,leftDown))
        }
    }

    return dp[n][m]
};
