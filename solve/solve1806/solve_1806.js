/**
 * @index 1806
 * @title 比赛中的配对次数
 * @difficulty 简单
 * @tags math,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/count-of-matches-in-tournament/
 * @frontendId 1688
*/

/**
 * @param {number} n
 * @return {number}
 * @date 2022/1/25
 */
var numberOfMatches = function(n) {
let counts = 0
    while(n > 1) {
        counts += Math.floor(n/2)
        n = n - Math.floor(n/2)
    }
    return counts
};
