/**
 * @index 1836
 * @title 生成乘积数组的方案数
 * @difficulty 困难
 * @tags array,math,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/count-ways-to-make-array-with-product/
 * @frontendId 1735
*/

/**
 * @param {number[][]} queries
 * @return {number[]}
 * @date 2021/8/20
 */
var waysToFillArray = function(queries) {
const brokenLettersList = brokenLetters.split("")
    let counts = 0
    for (ch of text.split(" ")) {
         
         let item = ch
         for(letter of brokenLettersList) {
             item = item.replace(RegExp(letter,'g'),'')
         }
        
        // console.log('m', item)
        if (item.length === ch.length)  {
            counts += 1
        }
    }

    return counts
};
