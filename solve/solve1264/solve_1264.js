/**
 * @index 1264
 * @title 可以输入的最大单词数
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-number-of-words-you-can-type/
 * @frontendId 1935
*/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 * @date 2021/8/20
 */
var canBeTypedWords = function(text, brokenLetters) {
const brokenLettersList = brokenLetters.split("")
    let counts = 0
    for (ch of text.split(" ")) {
         
         let item = ch
         for(letter of brokenLettersList) {
             item = item.replace(RegExp(letter,'g'),'')
         }
        
        // console.log('m', item)
        if (item.length === ch.length)  {
            counts += 1
        }
    }

    return counts
};
