/**
 * @index 782
 * @title 宝石与石头
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/jewels-and-stones/
 * @frontendId 771
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * @date 
 */
var numJewelsInStones = function(jewels, stones) {

let amap = new Map()
     for (i=0;i < stones.length;i++) {
         const item = stones[i]
         if (!amap.has(item)) {
             amap.set(item,1)
         } else {
             amap.set(item,amap.get(item)+1)
         }
     }

    let counts = 0
     for( j=0; j < jewels.length ; j++) {
         const item = jewels[j]
         if (amap.has(item)) {
             counts += amap.get(item)
         }
     }
     
     return counts

};
