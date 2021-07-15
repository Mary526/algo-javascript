/**
 * @index 344
 * @title 反转字符串
 * @difficulty 简单
 * @tags recursion,two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-string/
 * @frontendId 344
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * @date 2021/7/15
 */
var reverseString = function(s) {
// return s.reverse()
    let len = Math.floor(s.length/2)
    for(i=0;i< len;i++) {
        // console.log('==', i ,s.length-1-i)
        let temp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i]=temp
    }
    return s
};
