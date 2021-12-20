/**
 * @index 475
 * @title 供暖器
 * @difficulty 中等
 * @tags array,two-pointers,binary-search,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/heaters/
 * @frontendId 475
*/

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 * @date 2021/12/20
 */
var findRadius = function(houses, heaters) {
let max = -Infinity

    for(let i = 0; i < houses.length ; i++) {
        let min = Infinity
        for(let j = 0; j < heaters.length ; j++) {
            min  = Math.min(Math.abs(heaters[j] - houses[i]),min)
        }
        max = Math.max(max,min)
    }

    return max
};
