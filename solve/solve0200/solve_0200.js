/**
 * @index 200
 * @title 岛屿数量
 * @difficulty 中等
 * @tags depth-first-search,breadth-first-search,union-find,array,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-islands/
 * @frontendId 200
*/

/**
 * @param {character[][]} grid
 * @return {number}
 * @date 2021/12/22
 */
var numIslands = function(grid) {
let ans = 0 , m = grid.length , n = grid[0].length , visit = new Set() ,
    dx = [-1,0,1,0] , dy = [0,-1,0,1]

    // 深度遍历到每一个节点
    const dfs = (x,y) => {
        if(x === -1 || x === m || y === -1 || y === n) return

        if(visit.has(`${x}_${y}`)) return

        if(grid[x][y] === '1') {
            visit.add(`${x}_${y}`)
            for(let k = 0; k < 4; k++) {
                dfs(x+dx[k],y+dy[k])
            }
            
        }
    }

    for(let i = 0 ; i < m ; i++) {
        for(let j = 0 ; j < n ; j++) {
            if(visit.has(`${i}_${j}`)) continue
            if(grid[i][j] === '1') {
                dfs(i,j)
                ans += 1
            }
        }
    }

    return ans
};
