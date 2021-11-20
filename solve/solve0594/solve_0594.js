/**
 * @index 594
 * @title 最长和谐子序列
 * @difficulty 简单
 * @tags array,hash-table,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-harmonious-subsequence/
 * @frontendId 594
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/11/20
 */
var findLHS = function(nums) {
let array = nums.sort((a,b)=>{return a - b}) , amap = new Map() , counts = 0

    for(i = 0;i < array.length;i++) {
        if (!amap.has(array[i])) {
            amap.set(array[i],1)
        } else {
            amap.set(array[i],amap.get(array[i])+1)
        }
    }

    // console.log('amap', amap)
    const keys = Array.from(amap.keys())
    const values = Array.from(amap.values())
        // console.log(keys,values)

    for(j = 0;j < keys.length - 1 ;j++) {
        if (keys[j+1] - keys[j] === 1) {
            counts = Math.max(counts, values[j+1] + values[j])
        }

    }

    return counts

};
