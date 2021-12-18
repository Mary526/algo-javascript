/**
 * @index 419
 * @title 甲板上的战舰
 * @difficulty 中等
 * @tags depth-first-search,array,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/battleships-in-a-board/
 * @frontendId 419
*/

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
let counts = 0

    for(let y = 0; y < board.length ; y++) {
        for(let x = 0; x < board[0].length ; x++) {
            if(board[y][x] !== 'X') continue
            // 当前仅当左边和上边都不为“X”时，个数+1
            if((x - 1 >= 0 && board[y][x - 1] == 'X') || (y - 1 >= 0 && board[y - 1][x] == 'X')) continue;
            counts ++;
        }
    }

    return counts
};
