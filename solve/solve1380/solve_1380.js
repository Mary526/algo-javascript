/**
 * @index 1380
 * @title 统计封闭岛屿的数目
 * @difficulty 中等
 * @tags depth-first-search,breadth-first-search,union-find,array,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-closed-islands/
 * @frontendId 1254
*/

/**
 * @param {number[][]} grid
 * @return {number}
 * @date 2021/12/22
 */
var closedIsland = function(grid) {
let n = grid.length , m = grid[0].length ,
     visit = new Set(), dx = [-1,0,1,0] , dy = [0,1,0,-1] , flag = false

     const dfs = (i , j) => {
         if(i === -1 || i === n || j === -1 || j === m) {
             flag = true
             return
         }
            //  console.log(visit)

         if(visit.has(`${i}_${j}`)) return
         if(grid[i][j] === 0) {
             visit.add(`${i}_${j}`)
             for(let w = 0 ; w < 4 ; w++) {
                 dfs(i + dx[w],j + dy[w])
             }
         }
     }


     let ans = 0 
     for( let x = 0 ; x < n ; x++) {
         for( let y = 0 ; y < m ; y++) {
             if(visit.has(`${x}_${y}`)) continue

             if(grid[x][y] === 0) {
                 flag = false
                 dfs(x,y)
                 if(!flag) {
                     ans += 1
                 }
             }
         }
     }

     return ans
};
