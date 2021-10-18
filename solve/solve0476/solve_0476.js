/**
 * @index 476
 * @title 数字的补数
 * @difficulty 简单
 * @tags bit-manipulation
 * @draft false
 * @link https://leetcode-cn.com/problems/number-complement/
 * @frontendId 476
*/

/**
 * @param {number} num
 * @return {number}
 * @date 2021/10/18
 */
var findComplement = function(num) {
let temp = num, c = 0;
        while(temp > 0){
            temp >>= 1;
            c =  (c << 1) + 1;
        }
        return num ^ c;
};
