/**
 * @index 389
 * @title 找不同
 * @difficulty 简单
 * @tags bit-manipulation,hash-table,string,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/find-the-difference/
 * @frontendId 389
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * @date 2021/7/17
 */
var findTheDifference = function(s, t) {
    if (s === "") return t
    let sList = s.split("")
    let tList = t.split("")

    let amap = new Map()
    for(i=0 ;i<sList.length;i++) {
        const item = sList[i]
        if (!amap.has(item)){
            amap.set(item,1)
        } else {
            const value = amap.get(item) + 1
            amap.set(item, value)
        }
    }
    for (j=0;j< tList.length;j++) {
        const item = tList[j]
        if (!amap.has(item)) {
            return item
        } else {
            const value = amap.get(item) - 1
            if (value < 0) {
                return item
            }
            amap.set(item, value)
        }
    }
};
