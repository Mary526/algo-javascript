/**
 * @index 441
 * @title 排列硬币
 * @difficulty 简单
 * @tags math,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/arranging-coins/
 * @frontendId 441
*/

/**
 * @param {number} n
 * @return {number}
 * @date 2021.10.10
 */
var arrangeCoins = function(n) {
let counts = 0 , step = 1
    const addCoins = (a) => {
        // console.log("a:", a)
        if (a >= step) {
            a = a - step
            counts++
            step = step + 1
            addCoins(a)
        }  
    }

    addCoins(n)

    // console.log("counts:", counts)
    return counts
};
