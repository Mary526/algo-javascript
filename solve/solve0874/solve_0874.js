/**
 * @index 874
 * @title 比较含退格的字符串
 * @difficulty 简单
 * @tags stack,two-pointers,string,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/backspace-string-compare/
 * @frontendId 844
*/

/**
 * @param {string} s
 * @param {string} t 
 * @return {boolean}
 * @date 2021/8/8
 */

var backspaceCompare = function(s, t) {
const repaceString = (word) => {
        let w = []
        let point = 0
        for(i = word.length -1;i >= 0;i--) {
            if (word[i] === '#') {
                point++
            } else {
                if (point > 0) {
                    point--
                } else {
                    w.push(word[i])
                }
            }
        }
        return w.reverse().join("")
    }
        const s1 = repaceString(s)  
        const t1 = repaceString(t)


        // console.log("s1:", s1,',t1:', t1)

        return s1 === t1
};
