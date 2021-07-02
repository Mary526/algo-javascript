/**
 * @index 1
 * @title 两数之和
 * @difficulty 简单
 * @tags array,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/two-sum/
 * @frontendId 1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @date 2021/6/28
 */
var twoSum = function(nums, target) {
    // 判断机值情况
    if (typeof nums === 'undefined' || nums === null || nums.length < 1 || typeof(target) === 'undefined' || target === null) return

    let list = []
    nums.forEach((item,index)=>{
        nums.forEach((itemSon,indexSon)=>{
            if (index === indexSon) return
            if (item + itemSon !== target) return
            if (list.indexOf(index) >=0) return
            list.push(index)
            if (list.indexOf(indexSon)>=0) return
            list.push(indexSon)
        })
    })

    return list
};
