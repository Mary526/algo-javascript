/**
 * @index 900
 * @title 重新排序得到 2 的幂
 * @difficulty 中等
 * @tags math,counting,enumeration,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/reordered-power-of-2/
 * @frontendId 869
*/

/**
 * @param {number} n
 * @return {boolean}
 * @date 2021/10/28
 */
var reorderedPowerOf2 = function(n) {
const aSet = new Set(["1", "2", "4", "8", "16", "23", "46", "128", "256", "125", "0124", "0248", "0469", "1289", "13468", "23678", "35566", "011237", "122446", "224588", "0145678", "0122579", "0134449", "0368888", "11266777", "23334455", "01466788", "112234778", "234455668", "012356789", "0112344778"]) 

    let str = n.toString().split("").sort((a,b)=>a-b).join("")

    // console.log('str:', str) 

    return aSet.has(str)
};
