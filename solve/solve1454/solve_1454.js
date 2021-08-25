/**
 * @index 1454
 * @title 删除回文子序列
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-palindromic-subsequences/
 * @frontendId 1332
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/8/26
 */
var removePalindromeSub = function(s) {
if (s === "") return 0
    if (s === s.split("").reverse().join("")) return 1
    return 2
};
