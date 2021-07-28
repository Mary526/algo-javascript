/**
 * @index 657
 * @title 机器人能否返回原点
 * @difficulty 简单
 * @tags string,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/robot-return-to-origin/
 * @frontendId 657
*/

/**
 * @param {string} moves
 * @return {boolean}
 * @date 2021/7/28
 */
var judgeCircle = function(moves) {
let x = 0
    let y = 0

    const movesList = moves.split("")
    for(i = 0; i < movesList.length; i++) {
        const item = movesList[i]
        // console.log("item:", item)
        if (['U','D'].indexOf(item) >= 0) {
            x += item === 'U' ? 1 : -1
        } else if (['R','L'].indexOf(item) >= 0) {
               y += item === 'R' ? 1 : -1 
        }
    }
    // console.log('x:', x,',y:',y)

    const val = Math.pow(x,2) + Math.pow(y,2)
    // console.log("val:", val)

    return val === 0
};
