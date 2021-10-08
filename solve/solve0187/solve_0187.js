/**
 * @index 187
 * @title 重复的DNA序列
 * @difficulty 中等
 * @tags bit-manipulation,hash-table,string,sliding-window,hash-function,rolling-hash
 * @draft false
 * @link https://leetcode-cn.com/problems/repeated-dna-sequences/
 * @frontendId 187
*/

/**
 * @param {string} s
 * @return {string[]}
 * @date 2021/10/8
 */
var findRepeatedDnaSequences = function(s) {
let array = [] , amap = new Map() , i = 0
    while(i + 10 <= s.length) {
        const item = s.slice(i,i+10)
        if (!amap.has(item)) {
            amap.set(item,1)
        } else if ( amap.has(item) && array.indexOf(item) < 0) {
            array.push(item)
        }
        i++
    }
    return array
};
