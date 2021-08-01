/**
 * @index 822
 * @title 唯一摩尔斯密码词
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/unique-morse-code-words/
 * @frontendId 804
*/

/**
 * @param {string[]} words
 * @return {number}
 * @date 2021/8/2
 */
var uniqueMorseRepresentations = function(words) {
if (words.length === 0) return 0

    const morses = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 
    let amap = new Map()
    for(i =0;i < words.length; i++) {
        const item = words[i]
        const letter2Morse = item.split("").map(letter =>{
            return morses[letter.charCodeAt() - 97] 
        }).join("")

        if (!amap.has(letter2Morse)) {
            amap.set(letter2Morse,1)
        } else {
            amap.set(letter2Morse,amap.get(letter2Morse) + 1)
        }
    }

     
    // console.log("amap:", amap.size)
    return amap.size
};
