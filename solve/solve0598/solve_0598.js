/**
 * @index 598
 * @title 范围求和 II
 * @difficulty 简单
 * @tags array,math
 * @draft false
 * @link https://leetcode-cn.com/problems/range-addition-ii/
 * @frontendId 598
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 * @date 2021/11/7
 */
var maxCount = function(m, n, ops) {
let mina = m , minb = n
    if (ops.length < 1) return mina*minb
    for(let i = 0; i < ops.length ;i++) {
        mina = Math.min(mina, ops[i][0])
        minb = Math.min(minb, ops[i][1])
    }

    return mina*minb
};
