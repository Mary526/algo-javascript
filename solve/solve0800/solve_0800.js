/**
 * @index 800
 * @title 字母大小写全排列
 * @difficulty 中等
 * @tags bit-manipulation,string,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/letter-case-permutation/
 * @frontendId 784
*/

/**
 * @param {string} s
 * @return {string[]}
 * @date 2021/11/28
 */
var letterCasePermutation = function(s) {
let ans = [] , counts = 0
    for(i = 0;i<s.length;i++){
        if ((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) || s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90)
        counts++
    }
    if (counts === 0) return [s]

    // console.log("counts:", counts)

    const changeLetterCasePermutation = (start,string,depth) => {
        let copy = string.slice()   
        // console.log("start:", start, depth, copy)
        if (depth === 0) {
            ans.push(copy) 
            return
        }
        for(j = start; j < copy.length;j++) {
            
            if ((copy[j].charCodeAt() >= 97 && copy[j].charCodeAt() <= 122) || copy[j].charCodeAt() >= 65 && copy[j].charCodeAt() <= 90) {

                let tempLower = copy.split("").slice()
                tempLower[j] = tempLower[j].toLowerCase()
                let copyLower = tempLower.join("")

                let tempUpper= copy.split("").slice()
                tempUpper[j] = tempUpper[j].toUpperCase()
                let copyUpper = tempUpper.join("")

                // console.log("j--:",j,",copyLower:",copyLower,',copyUpper:',copyUpper, depth)
                // 坑爹啊，这里直接放j + 1，值就不对，应该还是引用地址导致的内存泄漏吧
                let depthCopy = depth-1 , jCopy = j + 1
                changeLetterCasePermutation(jCopy,copyLower,depthCopy)
                 
                changeLetterCasePermutation(jCopy,copyUpper,depthCopy)

            }
        }
    }

    changeLetterCasePermutation(0 , s , counts)
    return ans
};
