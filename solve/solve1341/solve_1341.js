/**
 * @index 1341
 * @title 分割平衡字符串
 * @difficulty 简单
 * @tags greedy,string,counting
 * @draft false
 * @link https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
 * @frontendId 1221
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/8/24
 */
var balancedStringSplit = function(s) {
let rCounts = 0
    let lCounts = 0
    let counts = 0
    for(i=0;i<s.length;i++) {
        if (s[i] === 'R') {
            rCounts++
        } else if (s[i] === 'L') {
            lCounts++
        }
        if (rCounts === lCounts) {
            counts++
            rCounts = 0
            lCounts = 0
        }
    }
    return counts
};
