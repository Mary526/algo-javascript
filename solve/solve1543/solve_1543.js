/**
 * @index 1543
 * @title 最简分数
 * @difficulty 中等
 * @tags math,string,number-theory
 * @draft false
 * @link https://leetcode-cn.com/problems/simplified-fractions/
 * @frontendId 1447
*/

/**
 * @param {number} n
 * @return {string[]}
 * @date 2022/2/10
 */
var simplifiedFractions = function(n) {
const ans = [];
    for (let denominator = 2; denominator <= n; ++denominator) {
        for (let numerator = 1; numerator < denominator; ++numerator) {
            if (gcd(numerator, denominator) == 1) {
                ans.push(numerator + "/" + denominator);
            }
        }
    }
    return ans;
};
const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
} 
