/**
 * @index 1651
 * @title 重新排列字符串
 * @difficulty 简单
 * @tags array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/shuffle-string/
 * @frontendId 1528
*/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * @date 2021/8/31
 */
var restoreString = function(s, indices) {
let array = Array(s.length)
    for(i=0;i<s.length;i++) {
        array[indices[i]] = s[i]
    }
    return array.join("")
};
