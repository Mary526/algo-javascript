/**
 * @index 506
 * @title 相对名次
 * @difficulty 简单
 * @tags array,sorting,heap-priority-queue
 * @draft false
 * @link https://leetcode-cn.com/problems/relative-ranks/
 * @frontendId 506
*/

/**
 * @param {number[]} score
 * @return {string[]}
 * @date 2021/12/2
 */
var findRelativeRanks = function(score) {
let amap = new Map()
    
    let array = score.slice().sort((a,b)=> b-a)

    // console.log("array:",array)
    for(i = 0;i < array.length;i++) {
        amap.set(array[i],i+1)
    }
    // console.log("array",amap)
    const defaultDesc = {1:'Gold Medal',2:'Silver Medal',3:'Bronze Medal'}

    return score.map(item=>{
        // console.log(item,amap.get(item))
        return defaultDesc[amap.get(item)]|| amap.get(item).toString()
    })
};
