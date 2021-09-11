/**
 * @index 600
 * @title 不含连续1的非负整数
 * @difficulty 困难
 * @tags dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/non-negative-integers-without-consecutive-ones/
 * @frontendId 600
*/

/**
 * @param {number} n
 * @return {number}
 * @date 2021/9/11
 */
var findIntegers = function(n) {
const dp = new Array(31).fill(0);
    dp[0] = dp[1] = 1;
    for (let i = 2; i < 31; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    let pre = 0, res = 0;
    for (let i = 29; i >= 0; --i) {
        let val = 1 << i;
        if ((n & val) !== 0) {
            n -= val;
            res += dp[i + 1];
            if (pre === 1) {
                break;
            }
            pre = 1;
        } else {
            pre = 0;
        }

        if (i === 0) {
            ++res;
        }
    }

    return res;
};
