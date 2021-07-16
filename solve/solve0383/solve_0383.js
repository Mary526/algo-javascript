/**
 * @index 383
 * @title 赎金信
 * @difficulty 简单
 * @tags hash-table,string,counting
 * @draft false
 * @link https://leetcode-cn.com/problems/ransom-note/
 * @frontendId 383
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @date 2021/7/16
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote === magazine) return true
    const rLength = ransomNote.length
    const mLength = magazine.length
    if (rLength > mLength) return false

    let rList = ransomNote.toLocaleLowerCase().split("")
    let mList = magazine.toLocaleLowerCase().split("")

    let flag = true
    let amap = new Map()
    for(i=0;i<mLength;i++) {
        let mItem = mList[i]
        if (!amap.has(mItem)) {
            amap.set(mItem,1)
        } else {
            const value = amap.get(mItem)
            amap.set(mItem, value+1)
        }
    }
    // console.log('amap', amap)
    for(j=0;j<rLength;j++) {
        let rItem = rList[j]
        if (!amap.has(rItem)) {
            return flag = false
        } else {
            const value = amap.get(rItem)
            if ( value-1 < 0) {
                return flag = false
            }
            amap.set(rItem,value-1)
        }
    }
    return flag
};
