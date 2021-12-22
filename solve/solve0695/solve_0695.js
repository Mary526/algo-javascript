/**
 * @index 695
 * @title 岛屿的最大面积
 * @difficulty 中等
 * @tags depth-first-search,breadth-first-search,union-find,array,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/max-area-of-island/
 * @frontendId 695
*/

/**
 * @param {number[][]} grid
 * @return {number}
 * @date 2021/12/23
 */
var maxAreaOfIsland = function(grid) {
let m = grid.length , n = grid[0].length , dx = [-1,0,1,0] , dy = [0,-1,0,1] , 
    maxArea = 0 , visit = new Set() , idx = 0 , IsLandMap = new Map()

    const dfs = (x , y) => {

        if(x === -1 || x === m || y === -1 || y === n) return

        if(visit.has(`${x}_${y}`)) return

        if(grid[x][y] === 1) {
            visit.add(`${x}_${y}`)

            if(!IsLandMap.has(idx)) {
                IsLandMap.set(idx, [`${x}_${y}`])
                // maxArea = Math.max(maxArea,1)
            } else {
                let array = IsLandMap.get(idx)
                array.push(`${x}_${y}`)
                IsLandMap.set(idx, array)
                // maxArea = Math.max(maxArea,array.length)
            }
            // 比较当前最大岛屿面积
            maxArea = Math.max(maxArea,IsLandMap.get(idx).length)

            for(let k = 0 ; k < 4 ; k++) {
                dfs(x+dx[k],y+dy[k])
            }
        }
    }

    for(let i = 0 ; i < m ; i++) {
        for(let j = 0 ; j < n ;j++) {
            if(visit.has(`${i}_${j}`)) continue

            if(grid[i][j] === 1) {
                dfs(i,j)
                // 给岛屿编号 “哥伦布发现新大陆啦”
                idx += 1
            }
        }
    }

    // console.log(idx,IsLandMap)

    return maxArea
};
