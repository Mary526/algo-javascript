/**
 * @index 48
 * @title 旋转图像
 * @difficulty 中等
 * @tags array,math,matrix
 * @draft false
 * @link https://leetcode-cn.com/problems/rotate-image/
 * @frontendId 48
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @date 2021/12/1
 */
var rotate = function(matrix) {
	let copyMatrix = matrix.slice() 
    const len = copyMatrix.length
    // 回溯
    for(let i = 0;i < len;i++) {
        const reverList = (x,y,list) => {
            if(y === -1) {
              return  matrix[x] = list.slice()
            }
            let temp = list.slice()
            temp.push(copyMatrix[y][x])
            const depth = y - 1
            reverList(x,depth,temp)
        }
        reverList(i,len-1,[])
    }
};
