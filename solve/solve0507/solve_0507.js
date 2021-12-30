/**
 * @index 507
 * @title 完美数
 * @difficulty 简单
 * @tags math
 * @draft false
 * @link https://leetcode-cn.com/problems/perfect-number/
 * @frontendId 507
*/

/**
 * @param {number} num
 * @return {boolean}
 * @date 2021/12/31
 */
var checkPerfectNumber = function(num) {
// 边界情况
    if(num === 1) return false

    let ansSet = new Set() , summary = 1
    for(let i = 2 ; i < num ; i++) {
        if(num%i === 0 && !ansSet.has(i)) {
            ansSet.add(i)
            summary += i
            if(!ansSet.has(num/i)) {
                ansSet.add(num/i)
                summary += num / i
            }
        }
    } 

    // console.log("ansSet", ansSet)
    return summary === num
};
