/**
 * @index 229
 * @title 求众数 II
 * @difficulty 中等
 * @tags array,hash-table,counting,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/majority-element-ii/
 * @frontendId 229
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * @date 2021/10/22
 */
var majorityElement = function(nums) {
let n = Math.floor(nums.length/3) , amap = new Map() , array = []
    for(let i = 0 ;i < nums.length ; i++) {
        if (!amap.get(nums[i])) {
           amap.set(nums[i],1)
        } else {
            amap.set(nums[i],amap.get(nums[i]) + 1)
        }
    }

    // console.log("amap:", amap)

    for(const [key , value] of amap) {
        if (value > n) {
            array.push(key)
        }
    }

    return  array
};
