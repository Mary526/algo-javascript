/**
 * @index 1434
 * @title 解码字母到整数映射
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * @frontendId 1309
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/8/25
 */
var freqAlphabets = function(s) {
let array = []
    // console.log('a'.charCodeAt(),'i'.charCodeAt(),'j'.charCodeAt())
    for(i=s.length-1;i>=0;i--) {
        if ( s[i] !== '#'  ) {
            array.push(String.fromCharCode(Number(s[i])+96))
        }  else {
            // console.log("===1",i, ',值：',s.slice(i-2,i),',转换成字母', String.fromCharCode(Number(s.slice(i-2,i))+96))
            array.push(String.fromCharCode(Number(s.slice(i-2,i))+96))
            i = i - 2
        }
    }
    return array.reverse().join("")
};
