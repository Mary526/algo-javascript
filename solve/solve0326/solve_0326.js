/**
 * @index 326
 * @title 3的幂
 * @difficulty 简单
 * @tags recursion,math
 * @draft false
 * @link https://leetcode-cn.com/problems/power-of-three/
 * @frontendId 326
*/

/**
 * @param {number} n
 * @return {boolean}
 * @date 2021/9/23
 */
var isPowerOfThree = function(n) {
if (n === 0) return false
    if (n === 1) return true
    const mod = 3
    const isOver = (num) => {
        if (num%mod !== 0) {
            return false
        } else if (num%mod === 0 && num !== mod) {
              return  isOver(num/mod) 
        } else {
            return true
        } 
        
    } 

    return  isOver(n)
};
