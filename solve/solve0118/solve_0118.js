/**
 * @index 118
 * @title 杨辉三角
 * @difficulty 简单
 * @tags array,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/pascals-triangle/
 * @frontendId 118
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 * @date 2021/12/27
 */
var generate = function(numRows) {
let ans = []

    for(let i = 0 ; i < numRows ; i++) {
        const row = new Array(i+1).fill(1)
        for(j = 1 ; j < row.length - 1 ; j++) {
            row[j] = ans[i-1][j-1] + ans[i-1][j]
        }
        ans.push(row)
    }
    
    return ans
};
