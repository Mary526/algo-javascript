/**
 * @index 680
 * @title 验证回文字符串 Ⅱ
 * @difficulty 简单
 * @tags greedy,two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-palindrome-ii/
 * @frontendId 680
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
const checkSValid = (string,low,high) => {
        // console.log("=",string,low,high)
        for(i=low,j=high;i<j;++i,--j) {
            // console.log(string[i],string[j])
            if (string[i] !== string[j]) {
                return false
            } 
        }

        return true
    }

    let low = 0
    let high = s.length - 1
    for(i=0;i<s.length;i++) {
        if (low >= high) return true
        if (s[low] === s[high]) {
            low++
            high--
        }  else {
            // console.log("sfsd")
            // 贪心算法
            return checkSValid(s,low,high -1) || checkSValid(s,low+1,high)
        }
    }
};
