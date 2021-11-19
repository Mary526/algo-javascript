/**
 * @index 397
 * @title 整数替换
 * @difficulty 中等
 * @tags greedy,bit-manipulation,memoization,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/integer-replacement/
 * @frontendId 397
*/

/**
 * @param {number} n
 * @return {number}
 * @date 2021/11/19
 */
var integerReplacement = function(n) {
if (n === 1) return 0
        if (n % 2 === 0) {
            return integerReplacement(n / 2) + 1
        } else {
            return Math.min(integerReplacement(n-1),integerReplacement(n+1)) + 1
        }
};
