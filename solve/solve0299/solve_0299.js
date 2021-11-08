/**
 * @index 299
 * @title 猜数字游戏
 * @difficulty 中等
 * @tags hash-table,string,counting
 * @draft false
 * @link https://leetcode-cn.com/problems/bulls-and-cows/
 * @frontendId 299
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * @date 2021/11/8
 */
var getHint = function(secret, guess) {
let a = 0 , b = 0 , amap = new Map()

    for(let i = 0;i < secret.length;i++) {
        if (!amap.has(secret[i])) {
            amap.set(secret[i],1)
        } else {
            amap.set(secret[i],amap.get(secret[i])+1)
        }
    }

    // console.log("amap:",amap)

    // 先补完数字和位置完全一致的“公牛呢”
    for(let j = 0;j < guess.length; j++) {
        if(guess[j] === secret[j]) {
            a++
            if (amap.get(guess[j]) === 1) {
                amap.delete(guess[j])
            } else {
                amap.set(guess[j],amap.get(guess[j])-1)
            }
        }  
    }

    // 补完数字正确，位置不正确的奶牛
    for(let j = 0;j < guess.length; j++) {
        if(guess[j] !== secret[j]) {
            if(amap.has(guess[j])) {
                b++
                if (amap.get(guess[j]) === 1) {
                    amap.delete(guess[j])
                } else {
                    amap.set(guess[j],amap.get(guess[j])-1)
                }
            }
        }  
    }

    

    // console.log("A:", a,',B:',b)
    return `${a}A${b}B`
};
