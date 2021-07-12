/**
 * @index 88
 * @title 合并两个有序数组
 * @difficulty 简单
 * @tags array,two-pointers,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-sorted-array/
 * @frontendId 88
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @date 2021/7/12
 */
var merge = function(nums1, m, nums2, n) {
    let nums4 = nums1.splice(0,m).concat(nums2)
    const len = nums4.length
    // console.log('before', nums4)
    for(i=0;i<len-1;i++) {
        for(j=0;j<len-1-i;j++) {
            if(nums4[j] > nums4[j+1]) {
                const temp = nums4[j+1]
                nums4[j+1] = nums4[j]
                nums4[j] = temp
            }
        }
    }
    // console.log('nums4', nums4)
    for(k=0;k<len;k++){
        nums1[k] = nums4[k]
    }
    // if (nums1.length < 1 && nums2.length < 1) return []
    // for(i = 0; i < n; i++) {
    //     for (j = 0; j < m ; j++) {
    //         console.log('i:',i,'j:',j)
    //         if (i === 0 && nums2[i] <= nums1[j]) {
    //             nums1.unshift(nums2[i])
    //             j = m-1
    //         }
    //     }
    // }
    // for(i=0;i< m;i++) {
    //     for(j=0;j< n;j++) {
    //         if(nums2[j] <= nums1[i]) {
    //             nums1.unshift(nums2[j])
    //         }
    //         if (nums2[j] > nums1[i] && nums2[j] <=nums1[i+1]) {
    //             nums1.splice(i+1,0,nums2[j])
    //         }
    //         if (i === m-1 && nums2[j] > nums1[i]) {
    //             nums1.splice(m,0,nums2[j])
    //         }
    //     }
    // }
    // const nums4 = nums1.slice(0,m+n)
    // console.log('===', nums1.slice(0,m+n))
    // for(k=0;k<m+n;k++) {
    //     nums1[k] = nums4[k]
    // }
};
