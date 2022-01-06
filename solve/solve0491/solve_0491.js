/**
 * @index 491
 * @title 递增子序列
 * @difficulty 中等
 * @tags bit-manipulation,array,hash-table,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/increasing-subsequences/
 * @frontendId 491
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @date 2022/1/6
 */
var findSubsequences = function(nums) {
if(nums <= 1) return []
    let ans = [] , ansSet = new Set()
    // nums.sort((a,b) => a - b)
    const dfs = (idx , list) => {
        let temp = list.slice()
        if (idx === nums.length + 1) return
        if (list.length >= 2) {
            // console.log("idx", idx, list)
            if(!ansSet.has(temp.join("_"))) {
                ans.push(temp)
                ansSet.add(temp.join("_"))
            }  
        }
        for(let j = idx ; j < nums.length ; j++) {
            let temp = list.slice()
            // 如果不是升序，终止这条支线任务
            if(temp.length > 0 && temp[temp.length -1] > nums[j]) continue
            temp.push(nums[j])
            // console.log("temp:",idx,j, temp)
            dfs(j + 1,temp)
            temp.pop()
        }
    }

    // dfs(0,[])
    for(let i = 0 ; i < nums.length ; i++) {
        // if(nums.length - i < 2) continue
        if(i > 0 && nums[i] === nums[i-1]) continue
        dfs(i,[])
        // console.log("i",i)
    }
    return ans
};
