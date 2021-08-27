/**
 * @index 1547
 * @title 旅行终点站
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/destination-city/
 * @frontendId 1436
*/

/**
 * @param {string[][]} paths
 * @return {string}
 * @date 2021/8/28
 */
var destCity = function(paths) {
let amap = new Map()
    for(i = 0; i < paths.length ; i++) {
        // if (!amap.has(paths[i][0])){
            amap.set(paths[i][0],paths[i][1])
        // } 
         if (!amap.has(paths[i][1])) {
            amap.set(paths[i][1],null)
        }
    }
    // console.log('amap:', amap)
    const values = Array.from(amap.values())
    const keys = Array.from(amap.keys())

    for(j=0;j<values.length;j++) {
        if (values[j] === null) {
            return keys[j]
        }
    }
    return ""
};
