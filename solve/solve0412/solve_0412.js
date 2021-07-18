/**
 * @index 412
 * @title Fizz Buzz
 * @difficulty 简单
 * @tags math,string,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/fizz-buzz/
 * @frontendId 412
*/

/**
 * @param {number} n
 * @return {string[]}
 * @date 2021/7/18
 */
var fizzBuzz = function(n) {
    if (n === 0) return []
    let list = []
    for(i=1;i<n+1;i++) {
        if (i%3 === 0 && i%5 === 0) {
            list.push("FizzBuzz")
        } else if (i%3 === 0 && i%5 !== 0) {
            list.push('Fizz')
        } else if (i%5 === 0 && i%3 !== 0) {
            list.push('Buzz')
        } else {
            list.push(i.toString())
        }
    }
    // console.log('list', list)
    return list
};
