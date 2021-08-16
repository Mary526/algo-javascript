/**
 * @index 1112
 * @title 拼写单词
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/
 * @frontendId 1160
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * @date 2021/8/16
 */
var countCharacters = function(words, chars) {
let amap = new Map()
     for(k=0;k<chars.length;k++) {
         if (!amap.has(chars[k])) {
             amap.set(chars[k],1)
         } else {
             amap.set(chars[k],amap.get(chars[k])+1)
         }
     }

    //  console.log("amap:", amap)
     let length = 0
     for(i=0;i<words.length;i++) {
        //  拷贝map
         let bmap = new Map(amap)
        //  console.log("==", bmap)

         for(j=0;j<words[i].length;j++) {
            //  console.log("words[i][j]", words[i][j],'bmap:', bmap)
            if (!bmap.has(words[i][j])) break
            const value = bmap.get(words[i][j])-1
            if (value < 0) break
            bmap.set(words[i][j],value)
            
            if (j === words[i].length-1) {
                // console.log('i:',i,',words[i].length:',words[i].length)
                length += words[i].length
            }
         }
     }
     return length
};
