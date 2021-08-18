/**
 * @index 1156
 * @title Bigram 分词
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/occurrences-after-bigram/
 * @frontendId 1078
*/

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 * @date 2021/8/19
 */
var findOcurrences = function(text, first, second) {
let array =[]
    const textArray = text.split(" ")
    for(i=0;i< textArray.length;i++) {
        if (textArray[i] === first && textArray[i+1] === second && textArray[i+2] ) {
             array.push(textArray[i+2])
        }  
         
    }
    return array
};
