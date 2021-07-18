/**
 * @index 434
 * @title 字符串中的单词数
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-segments-in-a-string/
 * @frontendId 434
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/7/18
 */
var countSegments = function(s) {
// console.log('s:',s.trim())
    s = s.trim()
    if (s === "") return 0
    let list = s.split(" ").filter(item=>{return item !== ""})
    // console.log('s:',list)
    return list.length
};
