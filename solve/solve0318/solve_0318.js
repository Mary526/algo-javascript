/**
 * @index 318
 * @title 最大单词长度乘积
 * @difficulty 中等
 * @tags bit-manipulation,array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-product-of-word-lengths/
 * @frontendId 318
*/

/**
 * @param {string[]} words
 * @return {number}
 * @date 2021/11/17
 */
var maxProduct = function(words) {
const checkWordHasCommonCharactor=(word1,word2) =>{
         

        // console.log("lsit1",list1,',list2:', list2)
        for(m = 0 ; m < word1.length ;m++) {
            for(n = 0 ; n < word2.length ;n++) {
                if (word1[m] === word2[n]) {
                    return true
                }
            }
        }
        return false

    }
        let max = 0
        for(i = 0 ; i < words.length ;i++) {
            for(j = i + 1 ; j < words.length ;j++) {
                if (!checkWordHasCommonCharactor(words[i],words[j])) {
                    max = Math.max(max, words[i].length*words[j].length)
                    // console.log("max:", max,',words[i]:',words[i],',words[j]',words[j])
                }
                 
            }
        }

        return max
};
