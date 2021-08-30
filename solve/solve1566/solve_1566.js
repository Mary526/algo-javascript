/**
 * @index 1566
 * @title 检查单词是否为句中其他单词的前缀
 * @difficulty 简单
 * @tags string,string-matching
 * @draft false
 * @link https://leetcode-cn.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * @frontendId 1455
*/

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 * @date 2021/8/30
 */
var isPrefixOfWord = function(sentence, searchWord) {
let sentenceList = sentence.split(" ")
    for(i = 0 ; i < sentenceList.length ; i++) {
        if (sentenceList[i].slice(0,searchWord.length) === searchWord) {
            return i + 1
        }
    }
    return -1
};
