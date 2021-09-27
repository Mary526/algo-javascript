/**
 * @index 91
 * @title 解码方法
 * @difficulty 中等
 * @tags string,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/decode-ways/
 * @frontendId 91
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/9/27
 */
var numDecodings = function(s) {
const n = s.length
    let array = Array(n + 1).fill(0)
    array[0] = 1
    for(i = 1 ; i < n + 1; i++) {
        if (s[i-1] !== '0') {
            array[i] = array[i] + array[i - 1]
        }
        if (i >= 2 && s[i - 2] !== '0' && ((s[i-2] - '0')*10 + (s[i-1] - '0')) <= 26) {
            array[i] = array[i] + array[i - 2]
        }
    }
    return array[n]
};
