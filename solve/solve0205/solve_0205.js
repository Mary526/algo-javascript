/**
 * @index 205
 * @title 同构字符串
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/isomorphic-strings/
 * @frontendId 205
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @date 2021/7/14
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    let flag = true
    let sList = s.split("")
    let tList = t.split("")
    let len = sList.length

    let amap = new Map()
    for(i=0;i<len;i++) {
        const sItem = sList[i]
        const tItem = tList[i]
        // console.log("i:",i,"amap:",amap,"sItem:",sItem,"tItem:",tItem)
        if ( !amap.has(sItem) ) {
            amap.set(sItem,tItem)
        } else if (amap.has(sItem) && amap.get(sItem) !== tItem) {
            return   flag = false
            // console.log('====flag', flag)

        }
    }
    let bmap = new Map()
    for(j=0;j<len;j++) {
        const sItem = sList[j]
        const tItem = tList[j]
        // console.log("i:",j,"bmap:",bmap,"sItem:",sItem,"tItem:",tItem)
        if ( !bmap.has(tItem) ) {
            bmap.set(tItem,sItem)
        } else if (bmap.has(tItem) && bmap.get(tItem) !== sItem) {
            return  flag = false
            // console.log('====flag', flag)

        }
    }
    // console.log('flag', flag)
    return flag
};
