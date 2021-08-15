/**
 * @index 1044
 * @title 查找常用字符
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/find-common-characters/
 * @frontendId 1002
*/

/**
 * @param {string[]} words
 * @return {string[]}
 * @date 2021/8/15
 */
var commonChars = function(words) {
let array = []
    for(i=0;i<words[0].length;i++) {
        for (j=1;j<words.length;j++) {
            const letter = words[0][i]
            const index = words[j].indexOf(letter)
            // console.log("letter:",  letter, 'words[j]:',words[j],',index:', index)
            if(index < 0) break
            if(j === words.length - 1) {
                array.push(letter)
                
                for (k = 1;k<words.length;k++) {
                    // console.log("k:",k)
                    words[k] = words[k].replace(new RegExp(letter), '')
                }
                // console.log("words[k]", words)
            }

        }
    }

    return array
};
