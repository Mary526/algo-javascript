/**
 * @index 36
 * @title 有效的数独
 * @difficulty 中等
 * @tags array,hash-table,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-sudoku/
 * @frontendId 36
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 * @date 2021/9/17
 */
var isValidSudoku = function(board) {
// 检验数组是否有效
    const singleIsValid = (list) => {
        // console.log("list:", list) 
        let amap = new Map()
        for(let i = 0; i < list.length ;i++) {
            if (list[i] !== ".") {
                if (!amap.has(list[i])) {
                    amap.set(list[i], 1)
                } else { 
                    return false
                }
            }
            
        }
        return true
    }

    // 检查每一行，已填入的数字不相同
    for ( let j = 0 ;j < board[0].length ; j++) {
        const flag = singleIsValid(board[j])
        if (!flag) return false
    }

    // 检查每一列，已填入的数字不相同
    for(let k = 0 ; k < board.length ; k++) {
        let temp = []
        board.forEach(item => {
            temp.push(item[k])
        })
        const flag = singleIsValid(temp)
        if (!flag) return false
    }

    // 检查每个 3 * 3 的单元格，已填入的数字不相同
    // 横向 * 纵向
    for (let h = 0 ; h < 9 ; h++ ) {
        let temp = []        
        const time = Math.floor(h/3)

        for (let p = 0 ; p < 3 ; p++) {
            // console.log("h:", h, ', p:', p + 3*time, ',纵坐标:', p, ',横坐标：,',h*3 -time*9,h*3+3 - time*9)
            temp = temp.concat(board[p + 3*time].slice(h*3 -time*9 ,h*3+3 - time*9))
              
            const flag = singleIsValid(temp)
            if (!flag) return false
            
        }

        // console.log("arr",h,',:', arr)
        
    }



    return true
};
