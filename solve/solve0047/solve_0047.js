/**
 * @index 47
 * @title 全排列 II
 * @difficulty 中等
 * @tags array,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/permutations-ii/
 * @frontendId 47
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @date 2021/12/21
 */
var permuteUnique = function(nums) {
// 排列妙就妙在它是全排列，每次下标都从0开始扫，
    // 这题比较特殊，他是含有重复数字的全排列，题目就是要我们处理对重复数字的去重
    let ans = [] , n = nums.length , visit = new Array(n)

    const getPermuteUnique = (index,list) => {
        if(index === n) {
            return ans.push(list.slice())
        }

        for(let i = 0 ;i < n ; i++){
            if(visit[i]) continue
            // 去掉下面这个“去重”，就是所有数字的全排列，不过题目考查的就是对重复数字的去重
            if((i + 1 < n && nums[i] === nums[i+1] && visit[i+1])) continue 
            visit[i] = true
            list.push(nums[i])
            getPermuteUnique(index+1,list)
            visit[i] = false
            list.pop()
        }
    }
    // 这里需要排序，将相同的数字放在一起，便于去重
    nums.sort((a,b)=>a-b)

    getPermuteUnique(0,[])
    return ans
};
