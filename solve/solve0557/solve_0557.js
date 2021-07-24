/**
 * @index 557
 * @title 反转字符串中的单词 III
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @frontendId 557
*/

/**
 * @param {string} s
 * @return {string}
 * @return 2021/7/24
 */
var reverseWords = function(s) {
if(s.trim("") === "") return s
    let sList = s.split(" ")
    let list = []
    for(i=0;i<sList.length;i++) {
        const item = sList[i].split("").reverse().join("")
        // console.log('item:', item)
        list.push(item)
    }
    // console.log('sList', list.join(" "))
    return list.join(" ")
};
