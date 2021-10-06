/**
 * @index 414
 * @title 第三大的数
 * @difficulty 简单
 * @tags array,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/third-maximum-number/
 * @frontendId 414
*/

/**
 * @param {number[]} nums
 * @return {number}
 * @date 2021/10/6
 */
var thirdMax = function(nums) {
nums = nums.sort((a,b)=>b-a)
    // console.log('nums:', nums)
    let amap = new Map() , n = nums.length
    while( n ){
        if(!amap.has(nums[nums.length - n])) {
            amap.set(nums[nums.length - n],1)
        }
        n--
    }
    if (amap.size < 3) return nums[0]
    // console.log("amap:", amap)
    const keys = Array.from(amap.keys())
    // console.log("keys:", keys)
    return keys[2]
};
