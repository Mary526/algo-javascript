/**
 * @index 71
 * @title 简化路径
 * @difficulty 中等
 * @tags stack,string
 * @draft false
 * @link https://leetcode-cn.com/problems/simplify-path/
 * @frontendId 71
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
let temp = path.split("/") , ans = []
    // console.log("temp:", temp)
    for(let i = 0 ; i < temp.length ; i++) {
        // 空串 返回
        if(["",'/','.'].indexOf(temp[i]) >= 0) continue
        if(temp[i] === '..') {
            if(ans.length > 0) {
                ans.pop()
            }
            continue
        } 
            ans.push(temp[i])
        

    } 
    // console.log("ans", ans)
    return '/'+ans.join("/")
};
