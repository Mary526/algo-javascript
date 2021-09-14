/**
 * @index 2128
 * @title 反转单词前缀
 * @difficulty 简单
 * @tags 
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-prefix-of-word/
 * @frontendId 2000
*/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 * @date 2021/9/12
 */
var reversePrefix = function(word, ch) {
for(let i = 0; i < word.length ; i++) {
        
        if (word[i] === ch) {
            const prefix = word.slice(0,i+1).split("").reverse().join("")
            // console.log("prefix:", prefix)
            return prefix + word.slice(i+1)
        }
        
    }
    
    return word
};
