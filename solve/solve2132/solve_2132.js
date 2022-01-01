/**
 * @index 2132
 * @title 将一维数组转变成二维数组
 * @difficulty 简单
 * @tags array,matrix,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/convert-1d-array-into-2d-array/
 * @frontendId 2022
*/

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @date 2022/1/1
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
if(m*n !== original.length) return []

    let ans = new Array(m).fill(0).map(()=>new Array(n).fill(0)) , idx = 0
    // console.log("ans:", ans)
    for(let i = 0 ; i < m ; i++) {
        for(let j = 0 ; j < n ; j++) {
            ans[i][j] = original[idx]
            idx++
        }
    }
    return ans
};
