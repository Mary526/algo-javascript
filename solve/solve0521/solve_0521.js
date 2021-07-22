/**
 * @index 521
 * @title 最长特殊序列 Ⅰ
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/
 * @frontendId 521
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 * @date 2021/7/22
 */
var findLUSlength = function(a, b) {
    if (a.length > b.length) return a.length
    if (a.length < b.length) return b.length
    if (a === "" || b === "" || a === b) return -1
    let flag = false
    for(i=0;i<a.length;i++) {
        const aItem = a[i]
        const bItem = b[i]
        if (aItem !== bItem) return a.length
    }

    return  0
};
