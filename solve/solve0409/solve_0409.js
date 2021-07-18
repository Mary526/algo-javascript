/**
 * @index 409
 * @title 最长回文串
 * @difficulty 简单
 * @tags greedy,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-palindrome/
 * @frontendId 409
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/7/17
 */
var longestPalindrome = function(s) {
    if (s==="") return true
    let amap = new Map()
    let sList = s.split("")
    for(i=0;i<sList.length;i++) {
        const item = sList[i]
        if (!amap.has(item)) {
            amap.set(item,1)
        } else {
            amap.set(item,amap.get(item)+1)
        }
    }

    const values = Array.from(amap.values())
    console.log("values:", values,amap)
    if (values.length ===1) return values[0]
    let len = 0
    let flag = false

    for(j=0;j<values.length;j++) {
        const valueItem = values[j]
        // console.log('===>',j,valueItem%2,parseInt(valueItem/2))
        if(valueItem%2 === 0) {
            len = len + valueItem
        }
        if (valueItem%2 !== 0) {

            if (!flag) {
                len = len + parseInt(valueItem/2)*2 + 1
                flag = true
            } else {
                len = len + parseInt(valueItem/2)*2

            }

        }
    }

// console.log('==flag', len)
    return len
};
