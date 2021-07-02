/**
 * @index 9
 * @title 回文数
 * @difficulty 简单
 * @tags math
 * @draft false
 * @link https://leetcode-cn.com/problems/palindrome-number/
 * @frontendId 9
*/

/**
 * @param {number} x
 * @return {boolean}
 * @date 2021/6/30
 */
var isPalindrome = function(x) {
    let flag = false
    if(x < 0 || x > 2**31-1) return flag
    let xNext = x.toString().split('').reverse().join("")

    // console.log('xNext', x, x.toString().split(''),xNext,typeof xNext)
    if (xNext === x.toString()) {
        flag = true
    }

    return flag
};
