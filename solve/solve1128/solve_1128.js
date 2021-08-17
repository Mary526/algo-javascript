/**
 * @index 1128
 * @title 删除字符串中的所有相邻重复项
 * @difficulty 简单
 * @tags stack,string
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @frontendId 1047
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/8/17
 */
var removeDuplicates = function(s) {
let strings = [] 
    for(const ch of s) {
        if (strings.length && strings[strings.length-1]===ch) {
            strings.pop()
        } else {
            strings.push(ch)
        }
    }
    return strings.join("")
};
