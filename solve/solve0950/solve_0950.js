/**
 * @index 950
 * @title 卡牌分组
 * @difficulty 简单
 * @tags array,hash-table,math,counting,number-theory
 * @draft false
 * @link https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @frontendId 914
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 * @date 2021/12/1
 */
var hasGroupsSizeX = function(deck) {
let amap = new Map()  
    for(i = 0; i < deck.length ; i++) {
        if (!amap.has(deck[i])) {
            amap.set(deck[i], 1)
        } else {
            amap.set(deck[i], amap.get(deck[i])+1)
        }
    }
    const values = Array.from(amap.values())
    // console.log("values", values)
    let start = values[0]

    const gcd = (a,b) => {
        // console.log("a,",a,b)
        return b === 0 ? a : gcd(b,a%b ) 
    }

    return values.every(item => {

        // console.log(gcd(start,item))
        start = gcd(start,item)
       return start > 1
    })
};
