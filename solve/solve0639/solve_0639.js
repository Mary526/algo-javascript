/**
 * @index 639
 * @title 解码方法 II
 * @difficulty 困难
 * @tags string,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/decode-ways-ii/
 * @frontendId 639
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/9/27
 */
var numDecodings = function(s) {
const MOD = 1000000007;
    const n = s.length;
    // a = f[i-2], b = f[i-1], c = f[i]
    let a = 0, b = 1, c = 0;
    for (let i = 1; i <= n; ++i) {
        c = b * check1digit(s[i - 1]) % MOD;
        if (i > 1) {
            c = (c + a * check2digits(s[i - 2], s[i - 1])) % MOD;
        }
        a = b;
        b = c;
    }
    return c;
}

const check1digit = (ch) => {
    if (ch === '0') {
        return 0;
    }
    return ch === '*' ? 9 : 1;
}

const check2digits = (c0, c1) => {
    if (c0 === '*' && c1 === '*') {
        return 15;
    }
    if (c0 === '*') {
        return c1 <= '6' ? 2 : 1;
    }
    if (c1 === '*') {
        if (c0 === '1') {
            return 9;
        }
        if (c0 === '2') {
            return 6;
        }
        return 0;
    }
    return (c0 !== '0' && (c0 - '0') * 10 + (c1 - '0') <= 26) ? 1 : 0;
};
