/**
 * @index 686
 * @title 重复叠加字符串匹配
 * @difficulty 中等
 * @tags string,string-matching
 * @draft false
 * @link https://leetcode-cn.com/problems/repeated-string-match/
 * @frontendId 686
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 * @date 2021/12/22
 */
var repeatedStringMatch = function(a, b) {
    const k = Math.floor(b.length/a.length)

    for(let i = k ;i < k + 3 ;i++) {
        if(a.repeat(i).includes(b)) return i
    }

    return -1
};
