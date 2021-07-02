/**
 * @index 7
 * @title 整数反转
 * @difficulty 简单
 * @tags math
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-integer/
 * @frontendId 7
*/

/**
 * @param {number} x
 * @return {number}
 * @date 2021/6/29
 */
var reverse = function(x) {
    let flag = false
    // 长度超过32 返回

    let x2String = x.toString()
    let x2List = x2String.split('')
    // console.log('x2List', x2List)
    if (x2String[0]==='-') {
        flag = true
        x2List.splice(0,1)
    }
    let numberReverse = x2List.reverse().join('')

    // console.log('numberReverse', numberReverse)
    if (flag) {
        numberReverse = '-' +    numberReverse
    }
    if (numberReverse > 2147483647 || numberReverse <-2147483648) return 0
    return numberReverse
};
