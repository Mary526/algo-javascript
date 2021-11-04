/**
 * @index 367
 * @title 有效的完全平方数
 * @difficulty 简单
 * @tags math,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-perfect-square/
 * @frontendId 367
*/

/**
 * @param {number} num
 * @return {boolean}
 * @date 2021/11/4
 */
var isPerfectSquare = function(num) {
let left = 0 , right = num
    while (left <= right) {
        let mid = Math.floor((right - left)/2) + left
        const sqrt = mid * mid
        // console.log('mid:', mid,',left:', left ,',right:', right)
        if (sqrt < num) {
            left = mid + 1
        } else if (sqrt > num) {
            right = mid - 1
        } else if (sqrt === num) {
            return true
        }
    }

    return false
};
