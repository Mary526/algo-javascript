/**
 * @index 1464
 * @title 数组大小减半
 * @difficulty 中等
 * @tags greedy,array,hash-table,sorting,heap-priority-queue
 * @draft false
 * @link https://leetcode-cn.com/problems/reduce-array-size-to-the-half/
 * @frontendId 1338
*/

/**
 * @param {number[]} arr
 * @return {number}
 * @date 2021/12/5
 */
var minSetSize = function(arr) {
let ansMap = new Map()
    for(let i = 0;i < arr.length ;i++) {
        if (!ansMap.has(arr[i])) {
            ansMap.set(arr[i],1)
        } else {
            ansMap.set(arr[i],ansMap.get(arr[i])+1)
        }
    }


    const sortList = Array.from(ansMap.values()).sort((a,b)=>b-a)

    // console.log('sortList:', sortList,ansMap)
    let counts = 0

    for(let j = 0;j < sortList.length;j++) {
        counts += sortList[j]
        if (counts >= arr.length/2) {
            return j + 1
        }
    }
};
