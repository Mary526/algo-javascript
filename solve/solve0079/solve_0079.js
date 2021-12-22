/**
 * @index 79
 * @title 单词搜索
 * @difficulty 中等
 * @tags array,backtracking,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/word-search/
 * @frontendId 79
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * @date 2021/12/23
 */
var exist = function(board, word) {
let  dx = [-1,0,1,0] , dy = [0,-1,0,1]  
    m = board.length , n = board[0].length  , flag = false

    const dfs = (x,y,depth,visit) => {
        // console.log(depth,word.length)
        if(visit.length === word.length) {
            return flag = true
        }
         
        if(x === -1 || x === m || y === -1 || y === n) return

        if(visit.includes(`${x}_${y}`)) return

        // console.log("visit:====",[x,y],board[x][y], visit)

        if(board[x][y] === word[depth]) {
            let temp = visit.slice()
            temp.push(`${x}_${y}`) 
            for(let k = 0 ; k < 4 ; k++) {
                dfs(x+dx[k],y+dy[k],depth+1,temp)
            }
        }  
    }

    for(let i = 0 ; i < m ; i++) {
        for(let j = 0; j < n ; j++) {
            // if(visit.has(`${i}_${j}`)) continue
            // console.log(i,j,board[i][j],',index:',index,",visit:", visit)
            // console.log("visit:", visit,index,board[i][j],word[index])
            // if(board[i][j] === word[index]) { 
                dfs(i,j,0,[]) 
            // }
        }
    }
    // console.log("index:", index, visit)

    return flag
};
