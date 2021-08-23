/**
 * @index 1302
 * @title 删除字符使字符串变好
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/delete-characters-to-make-fancy-string/
 * @frontendId 1957
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/8/24
 */
var makeFancyString = function(s) {
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
