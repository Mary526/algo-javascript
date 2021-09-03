/**
 * @index 1666
 * @title 整理字符串
 * @difficulty 简单
 * @tags stack,string
 * @draft false
 * @link https://leetcode-cn.com/problems/make-the-string-great/
 * @frontendId 1544
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/9/3
 */
var makeGood = function(s) {
let array = []

    for(i=0;i<s.length;i++) {
        if (array.length === 0) {
            array.push(s[i])
        } else {
            // 如果为俩相同字母，且一个大写，一个小写
            const flag = array[array.length-1] !== s[i] && array[array.length-1].toLocaleLowerCase() === s[i].toLocaleLowerCase()

            // console.log("===flag", flag)

            if (flag) {
                array.pop(array[array.length-1])
            } else {
                array.push(s[i])
            }
        }
    }

    return array.join("")
};
