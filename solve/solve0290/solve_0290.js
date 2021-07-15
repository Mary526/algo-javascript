/**
 * @index 290
 * @title 单词规律
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/word-pattern/
 * @frontendId 290
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let patternList = pattern.split("")
    let sList = s.split(" ")
    // console.log("patterList",patternList,"sList", sList)
    if (patternList.length !== sList.length) return false
    let flag = true
    let amap = new Map()

    for(i=0; i<patternList.length ;i++) {
        const patternItem = patternList[i]
        const sItem = sList[i]

        if (!amap.has(patternItem)) {
            amap.set(patternItem,sItem)
        } else {

            // 要比较一下 看值对不对应
            if (amap.get(patternItem) !== sItem) {

                return flag = false
            }
        }
    }

    let bmap = new Map()

    for(j=0; j<patternList.length ;j++) {
        const patternItem = patternList[j]
        const sItem = sList[j]

        if (!bmap.has(sItem)) {
            bmap.set(sItem,patternItem)
        } else {

            // 要比较一下 看值对不对应
            if (bmap.get(sItem) !== patternItem) {

                return flag = false
            }
        }
    }
    // console.log('==',flag)
    return flag
};
