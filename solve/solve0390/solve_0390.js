/**
 * @index 390
 * @title 消除游戏
 * @difficulty 中等
 * @tags math
 * @draft false
 * @link https://leetcode-cn.com/problems/elimination-game/
 * @frontendId 390
*/

/**
 * @param {number} n
 * @return {number}
 * @date 2022/1/2
 */
var lastRemaining = function(n) {
// let array = new Array(n).fill(0).map((item,index) => index+1)  
    // const helper = (list) => {
    //     let ans = list.slice()
    //     if(ans.length === 1) {
    //         return ans[0]
    //     }
    //     ans = ans.filter((item,index) => index%2 !== 0)
    //     return  helper(ans.reverse())
    // }
   
    // return  helper(array)
    
    let a1 = 1, an = n;
    let k = 0, cnt = n, step = 1;
    while (cnt > 1) {
        if (k % 2 === 0) { // 正向
            a1 = a1 + step;
            an = (cnt % 2 === 0) ? an : an - step;
        } else { // 反向
            a1 = (cnt % 2 === 0) ? a1 : a1 + step;
            an = an - step;
        }
        k++;
        cnt = cnt >> 1;
        step = step << 1;
        // console.log("cnt:", cnt , step)
    }
    return a1; 
};
