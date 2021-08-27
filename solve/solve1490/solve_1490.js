/**
 * @index 1490
 * @title 生成每种字符都是奇数个的字符串
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * @frontendId 1374
*/

/**
 * @param {number} n
 * @return {string}
 * @date 2021/8/27
 */
var generateTheString = function(n) {
if (n%2!==0) {
        return Array(n).fill('a').join("")
    } else {
        return Array(n-1).fill('a').concat('b').join("")
    }
};
