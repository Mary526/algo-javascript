/**
 * @index 1660
 * @title 千位分隔数
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/thousand-separator/
 * @frontendId 1556
*/

/**
 * @param {number} n
 * @return {string}
 * @date 2021/8/31
 */
var thousandSeparator = function(n) {
const ns = n.toString()
    // console.log("n.length", ns.length)
    if (ns.length <= 3) return ns
    let array = []
    for(i=ns.length-1;i>=0;i--) {
        // console.log("i1:" , i , i - 2 >= 0)
        if ( i - 2 >= 0 ) {
            // console.log("====", ns.slice(i-2,i+1))
            array.push(ns.slice(i-2,i+1))
            i = i - 2
            // console.log("i2:" , i)
        } else {
            array.push(ns.slice(0,i+1))
            i = 0
        }
    }
    // console.log("array:", array)
    return array.reverse().join(".")
};
