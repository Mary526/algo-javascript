/**
 * @index 438
 * @title 找到字符串中所有字母异位词
 * @difficulty 中等
 * @tags hash-table,string,sliding-window
 * @draft false
 * @link https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * @frontendId 438
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * @date 2021/11/28
 */
var findAnagrams = function(s, p) {
let anagramsArray = [] , amap = new Map()

    for(j = 0;j < p.length ;j++) {
        if (!amap.has(p[j])) {
            amap.set(p[j],1)
        } else {
            amap.set(p[j], amap.get(p[j]) + 1)
        }
    }

    // console.log("amap:", amap)
 
    const checkIsEqual = (string) => {
        let flag = true , copyMap = new Map(amap) 
        for(m = 0; m < string.length ;m++) {
            if(!copyMap.has(string[m])) {
                return false
            } else {
                if (copyMap.get(string[m] === 0)) {
                    return false
                } else {
                    copyMap.set(string[m] ,copyMap.get(string[m]) - 1)
                }
            }

        }

        for([keys,values] of copyMap) {
            if (values !== 0) {
                return false
            }
        }
        return flag
    }

    for(let i = 0 ; i < s.length - p.length + 1;i++) {
        const string1 = s.slice(i,i+p.length) 
        // console.log("string1:", string1,',string2:', string2)
        if (checkIsEqual(string1)) {
            anagramsArray.push(i)
        }
    }
    return anagramsArray
};
