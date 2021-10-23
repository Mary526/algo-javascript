/**
 * @index 492
 * @title 构造矩形
 * @difficulty 简单
 * @tags math
 * @draft false
 * @link https://leetcode-cn.com/problems/construct-the-rectangle/
 * @frontendId 492
*/

/**
 * @param {number} area
 * @return {number[]}
 * @date 2021/10/23
 */
var constructRectangle = function(area) {
let n = Math.sqrt(area)

    let a1 = Math.floor(n)
while (area%a1 !== 0) {
        a1--
    }
    
    return [Math.floor(area/a1),a1]
};
