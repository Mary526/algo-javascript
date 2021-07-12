/**
 * @index 58
 * @title 最后一个单词的长度
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/length-of-last-word/
 * @frontendId 58
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/7/9
 */
var lengthOfLastWord = function(s) {
    if (s === "") return 0
    const s2List = s.split(" ").filter(item=>{return item !== ''})
    // console.log('s2List', s2List)
    const n = s2List.length
    if (n < 1) return 0
    // console.log('=====',s2List[n-1].length)
    return s2List[n-1].length
};
