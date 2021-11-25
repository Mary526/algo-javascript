/**
 * @index 46
 * @title 全排列
 * @difficulty 中等
 * @tags array,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/permutations/
 * @frontendId 46
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @date 2021/11/25
 */
var permute = function(nums) {
let ans = [] , k = nums.length

    const changePermte = (target,list) => {
        if(list.length === k) {
            const temp = list.slice()
            ans.push(temp)
            return
        }        

        for(let i = 0;i < target.length ;i++){
            list.push(target[i]) 
            let targetTemp = target.slice()
            targetTemp.splice(i,1) 
            changePermte(targetTemp,list)
            list.pop()
        }

    }
    changePermte(nums,[])
    return ans
};
