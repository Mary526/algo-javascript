/**
 * @index 345
 * @title 反转字符串中的元音字母
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 * @frontendId 345
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/7/15
 */
var reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    const sList = s.split("")
    let amap = new Map()
    for (i=0;i<sList.length;i++) {
        const sItem = sList[i]
        if (vowels.indexOf(sItem) >= 0) {
            amap.set(i,sItem)
        }
    }
    // console.log("===",amap)
    const len = Math.floor(amap.size/2)
    keys = Array.from(amap.keys())
    values = Array.from(amap.values())
    // console.log(typeof keys,values)
    for(j=0;j<len;j++) {
        sList[keys[j]] = values[amap.size -1-j]
        sList[keys[amap.size-1-j]] = values[j]
    }
    return sList.join("")
};
