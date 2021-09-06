/**
 * @index 792
 * @title 二分查找
 * @difficulty 简单
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-search/
 * @frontendId 704
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @date 2021/9/6
 */
var search = function(nums, target) {
// const findTarget = (list) => {
    //     const prelength = Math.floor(list.length/2)
    //     console.log("prelength:", prelength,',list[prelength-1]:',list[prelength-1])
    //     if (list[prelength-1] === target) return prelength - 1
    //     else if (list[prelength-1] > target) {
    //             findTarget(list.slice(0,prelength))
    //     }  else if (list[prelength-1] < target) {
    //         console.log('nums.slice(prelength)', list.slice(prelength))
    //         findTarget(list.slice(prelength))
    //     }
    //     return -1
    // }
    let index = 0

    const findTarget = (begin , end) => {
        // console.log("begin:", begin, ',end:', end)
        const midLength = Math.floor((end - begin + 1)/ 2)
        // console.log("二分长度:", midLength,',中间元素:',nums[begin + midLength-1])
        if (midLength === 0 && end === nums.length -1 && nums[nums.length-1] === target) {
            index = nums.length-1
        }
        else if (midLength === 0) {
            index = -1
        } else {


        // console.log('状态：',begin + midLength-1,',', nums[begin + midLength-1] === target, ', 角标：', begin + midLength-1,',返回的角标：', begin + midLength-1)
        if (nums[begin + midLength-1] === target) {
index =  begin + midLength-1
        }
         else if (nums[begin + midLength-1] > target) {
                findTarget(begin,begin + midLength-1)
        }  else if (nums[begin + midLength-1] < target) {
            findTarget(begin + midLength , end)
        }  
        // console.log('=====',begin,',',end)
        }
        
        // return -1
    }

    findTarget(0, nums.length - 1)

    // console.log("index:" , index)
    return index
};
