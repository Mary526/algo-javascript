/**
 * @index 1642
 * @title 换酒问题
 * @difficulty 简单
 * @tags math,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/water-bottles/
 * @frontendId 1518
*/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 * @date 2021/12/17
 */
var numWaterBottles = function(numBottles, numExchange) {
let counts = numBottles

    const loop = (n) => {
        
        // if(n%numExchange !== 0) {
            if(n < numExchange) return
            // console.log('n2:', n,counts)
            counts += (n-n%numExchange)/numExchange
            // 余数 + 新换的酒的瓶数
            loop(n%numExchange+(n-n%numExchange)/numExchange)
            return 
        // } else {
        //     counts += n/numExchange
        //     // console.log('n1:', n,counts)
        //     loop(n/numExchange)
        // }

    }
    loop(numBottles)
    // console.log(counts)
    return counts
};
