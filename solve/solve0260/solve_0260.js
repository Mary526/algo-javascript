/**
 * @index 260
 * @title 只出现一次的数字 III
 * @difficulty 中等
 * @tags bit-manipulation,array
 * @draft false
 * @link https://leetcode-cn.com/problems/single-number-iii/
 * @frontendId 260
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * @date 2021/10/30
 */
var singleNumber = function(nums) {
let amap = new Map()
    for(let i = 0 ;i < nums.length ;i++){
        if(!amap.has(nums[i])) {
            amap.set(nums[i],1)
        } else {
            amap.set(nums[i],amap.get(nums[i])+1)
        }
    }

    let array = []

    for(let [keys,values] of amap){
         if (values ===1) {
             array.push(keys)
         }
    }
    return array
};
