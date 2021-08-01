/**
 * @index 812
 * @title 旋转字符串
 * @difficulty 简单
 * @tags string,string-matching
 * @draft false
 * @link https://leetcode-cn.com/problems/rotate-string/
 * @frontendId 796
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * @date 2021/8/1
 */
var rotateString = function(s, goal) {
if (s.length !== goal.length) return false
    if (s === "") return true
    for(i=0;i<s.length;i++) {
        const item = s.slice(i+1,s.length) + s.slice(0,i+1)
        // console.log("item",item)
        if (item ===goal) return true
    }
    return false 
};
