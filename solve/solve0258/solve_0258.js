/**
 * @index 258
 * @title 各位相加
 * @difficulty 简单
 * @tags math,number-theory,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/add-digits/
 * @frontendId 258
*/

/**
 * @param {number} num
 * @return {number}
 * @date 2022/3/3
 */
var addDigits = function(num) {
while(num.toString().split("").length > 1) {
        let res = 0
        num.toString().split("").forEach(item => {
            res += parseInt(item)
        }) 
        // console.log("res", res)
        num = res
    }
};
