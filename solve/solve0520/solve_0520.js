/**
 * @index 520
 * @title 检测大写字母
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/detect-capital/
 * @frontendId 520
*/

/**
 * @param {string} word
 * @return {boolean}
 * @date 2021/7/21
 */
var detectCapitalUse = function(word) {
// 全部字母都是大写
    if (word === word.toUpperCase()) return true
    // 单词中所有字母都不是大写
    if (word === word.toLowerCase()) return true
    // 如果单词不只含有一个字母，只有首字母大写
    const string = word.slice(0,1).toUpperCase()+word.slice(1,word.length).toLowerCase()
    if (word === string) return true
    return false
};
