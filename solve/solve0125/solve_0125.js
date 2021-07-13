/**
 * @index 125
 * @title 验证回文串
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-palindrome/
 * @frontendId 125
*/

/**
 * @param {string} s
 * @return {boolean}
 * @date 2021/7/13
 */
var isPalindrome = function(s) {
    let flag = true
    if (s === '') return flag
    // s = s.replace(/,/g,"").replace(/:/g,"").replace(/\s+/g, "").toLocaleLowerCase()
    s = s.replace(/[^a-z0-9]/gi,"").toLocaleLowerCase()
    // console.log('===', s,s.length)
    const len = s.length
    // 判断是奇数还是偶数
    const odd = len % 2 === 1
    // console.log("len:",len,"odd:", odd)
    const nums = odd ? ((len-1)/2) : (len/2)

    const pre = s.slice(0,nums)
    const after = s.split("").reverse().join("").slice(0,nums)
    // console.log('pre:', pre,'after:',after)
    if (pre !== after) {
        flag = false
    }

    return flag
};
