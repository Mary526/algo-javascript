/**
 * @index 39
 * @title 组合总和
 * @difficulty 中等
 * @tags array,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/combination-sum/
 * @frontendId 39
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * @date 2021/12/21
 */
var combinationSum = function(candidates, target) {
let ans = [] , ansSet = new Set()

    const dfs = (list,summary) => {
        // console.log(list, summary,ansSet)
        if(summary > target) return
        if(summary === target) {
            const temp =list.slice()
            temp.sort((a,b)=>a-b)
            if (!ansSet.has(temp.join("-"))) {
                ansSet.add(temp.join("-"))
                return ans.push(temp)
            }
           
        }

        for(let i = 0 ; i < candidates.length ;i++) {
            // if(i > 0 && candidates[i-1] === candidates[i]) continue
            summary += candidates[i]
            let temp = list.slice()
            temp.push(candidates[i])
            dfs(temp, summary)
            summary -= candidates[i]
            temp.pop()
        }

    }
    candidates.sort((a,b)=>a-b)
    dfs([],0)
    return ans
};
