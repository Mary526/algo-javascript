/**
 * @index 26
 * @title 删除有序数组中的重复项
 * @difficulty 简单
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @frontendId 26
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//     for (let i = 1, j = 0; ; i++) {
//     if (nums[i] !== nums[j]) nums[++j] = nums[i];
//     if (i >= nums.length) return j;
//   }
    if(nums.length <= 1) return nums.length
    let i = 1
    for(j=1;j<nums.length;j++) {
        if (nums[j-1] !== nums[j]) {
            nums[i] = nums[j]
            i++
        }
    }
    return i

    // if (nums === null || nums.length === 1) {
    //     return nums.length
    // }
    //
    // for (let j = 1, i = 0; ; j++) {
    //     //   console.log('=i, j',i,j,nums.length)
    //     if (nums[j] !== nums[i]) nums[++i] = nums[j];
    //     if (j >= nums.length) return i;
    // }

    // let j = 0
    // for(i = 0; i < nums.length - 1;i++) {
    //     if (nums[i] === nums[i+1]) return
    //     nums.slice(i,1)
    //     j++
    // }
    // return j

    // for(i=0;i<list.length;i++) {
    //      const flag = nums.slice(i+1,nums.length).indexOf(nums[i]) >= 0
    //      console.log('flag', flag,i,nums[i])
    //      if (flag) {
    //          nums.splice(i,1)
    //      }
    // }
    // nums.forEach((item,index)=>{
    //     const list = nums.slice(index+1,nums.length)
    //     console.log('list ===',index,list)
    //     const flag = list.indexOf(item)>=0
    //     console.log("===flag",item,flag)
    //     if (flag) {
    //         nums.splice(index,1)
    //         console.log('nums2', nums)
    //     }
    //     console.log('nums ===', nums)
    // })
    // return nums.length
};
