/**
 * @index 1781
 * @title 检查两个字符串数组是否相等
 * @difficulty 简单
 * @tags array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/check-if-two-string-arrays-are-equivalent/
 * @frontendId 1662
*/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * @date 2021/9/16
 */
var arrayStringsAreEqual = function(word1, word2) {
return word1.join("") === word2.join("")
};
