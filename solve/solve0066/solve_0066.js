/**
 * @index 66
 * @title 加一
 * @difficulty 简单
 * @tags array,math
 * @draft false
 * @link https://leetcode-cn.com/problems/plus-one/
 * @frontendId 66
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 * @date 2021/7/9
 */
var plusOne = function(digits) {
    // 已废弃，数据超过16位，精度丢失
    // if (digits.length < 1) return 0
    // const n1 = digits.join("") * 1
    // console.log('n1', n1,typeof n1)
    // const n2 = n1 + 1
    // console.log('n2', n2)
    // const n2List = n2.toString().split('')
    // console.log('n2List', n2List)
    // return n2List



    for(i=digits.length-1;i>=0;i--) {
        // console.log('===', i)
        if(digits[i] !== 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }


    // 考虑极值情况 ，数组都是9
    digits = [1].concat(digits)

    return digits
};
