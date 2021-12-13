/**
 * @index 825
 * @title 保持城市天际线
 * @difficulty 中等
 * @tags greedy,array,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/max-increase-to-keep-city-skyline/
 * @frontendId 807
*/

/**
 * @param {number[][]} grid
 * @return {number}
 * @date 2021/12/13
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const n = grid.length
    let xAns = Array(n) , yAns = Array(n) , counts = 0

    //  先找到标杆
    for(let i = 0; i < n ; i++) {
        let xMax = -Infinity , yMax = -Infinity
        for(let j = 0; j < n ; j++) {
             xMax = Math.max(xMax,grid[i][j]) 
             yMax = Math.max(yMax,grid[j][i])
        }
        xAns[i] = xMax
        yAns[i] = yMax

    }

    // console.log(xAns,yAns)
    for(let k = 0 ; k < n; k++) {
        for(let l = 0 ; l < n; l++) {
            counts += Math.min(xAns[k],yAns[l]) - grid[k][l]
        }
    }
    return counts
};
