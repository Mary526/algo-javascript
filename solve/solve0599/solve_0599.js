/**
 * @index 599
 * @title 两个列表的最小索引总和
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
 * @frontendId 599
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * @date 2021/8/1
 */
var findRestaurant = function(list1, list2) {
let amap = new Map()
    for(i=0;i<list1.length;i++) {
        for(j=0;j<list2.length;j++) {
            if (list1[i] === list2[j]) {
                 amap.set(list1[i],i+j)
            }
        }
    }
    const values = Array.from(amap.values()).sort(function(a,b){return a-b});
    let keys = Array.from(amap.keys())
    if (keys.length <= 1) return keys
    const minCounts = values[0]
    // console.log('values===',values)

    let array = []
    for (const [key, value] of amap) {
        // console.log(key + ' = ' + value);
        if (value === minCounts) {
            array.push(key)
        }
    }
    // console.log('amap:',amap,array)
    return array
};
