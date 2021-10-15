/**
 * @index 38
 * @title 外观数列
 * @difficulty 中等
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/count-and-say/
 * @frontendId 38
*/

/**
 * @param {number} n
 * @return {string}
 * @date 2021/10/15
 */
var countAndSay = function(n) {
const handleWords = (string) => {
        // 定义每一个字母出现的次数 ， 当前字母 ，用于返回的字符串
        let counts = 0 , ch = '' , a = ''
        for(let i = 0; i < string.length ;i++) {
            if(ch === '' && counts === 0) {
                ch = string[i]
                counts++
            } else if (string[i] === ch) {
                counts++
            } else if (string[i] !== ch) {
                a += counts.toString() + ch
                ch = string[i]
                counts = 1
            } 
        }
        
        a += counts.toString() + ch
        return a
    }

    // 定义初始步长
    let start = 1 , string = '1'
    while (start < n) {
        string = handleWords(string)
        start++
    }

    // console.log("string:", string)
    return string
};
