/**
 * @index 35
 * @title 搜索插入位置
 * @difficulty 简单
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/search-insert-position/
 * @frontendId 35
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @date 2021/7/8
 */
var searchInsert = function(nums, target) {
    let i = -1
    if (nums.length < 1 || target === '') return -1
    //  存在
    i= nums.indexOf(target)
    //  console.log('===', i)
    if (i >= 0) return i
    //  不存在
    nums.forEach((item,index)=>{
        // console.log('item,index',item,index)
        // 极值 第一个
        if (index === 0 && target < item) {
            return i = 0
        }
        // 极值 最后一个
        if (index + 1 === nums.length && target > item ) {
            return i = nums.length
        }

        if (target > item && target < nums[index +1]) {
            return i = index + 1
        }
    })
    // console.log('==', i)
    return i
};
