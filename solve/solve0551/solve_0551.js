/**
 * @index 551
 * @title 学生出勤记录 I
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/student-attendance-record-i/
 * @frontendId 551
*/

/**
 * @param {string} s
 * @return {boolean}
 * @date 2021/7/24
 */
var checkRecord = function(s) {
let countsA = 0
    for (i=0;i<s.length;i++) {
        if(s[i] === 'A') {
            countsA += 1
        }
        if (countsA > 1 || s.indexOf("LLL") >= 0 ) return false 
    }
    return true
};
