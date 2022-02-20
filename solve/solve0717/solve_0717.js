/**
 * @index 717
 * @title 1比特与2比特字符
 * @difficulty 简单
 * @tags array
 * @draft false
 * @link https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/
 * @frontendId 717
*/

/**
 * @param {number[]} bits
 * @return {boolean}
 * @date 2022/2/20
 */
var isOneBitCharacter = function(bits) {
let i = 0, n = bits.length;
    while (i < n - 1) {
        i += bits[i] + 1;
    }
    return i === n - 1;
};
