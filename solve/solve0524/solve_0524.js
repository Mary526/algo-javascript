/**
 * @index 524
 * @title 通过删除字母匹配到字典里最长单词
 * @difficulty 中等
 * @tags array,two-pointers,string,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/
 * @frontendId 524
*/

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 * @date 2021/9/14
 */
var findLongestWord = function(s, dictionary) {
let res = ''

    for ( let t of dictionary ) {
        let i = 0 , j = 0

        while (s.length - 1 >= j && t.length - 1 >= i) {
            if (t[i] === s[j]) {
                i++
            }
            j++
        }

        // console.log("i:", i , ',j:', j)

        if (i === t.length) {
            if (i > res.length || i === res.length && t < res ) {
                res = t
            }
        }
        
    }

    return res
};
