/**
 * @index 1302
 * @title 删除字符使字符串变好
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/delete-characters-to-make-fancy-string/
 * @frontendId 1957
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/8/24
 */
var makeFancyString = function(s) {
let array = []
    let counts = 0
    for(i=0;i<s.length;i++) {
        if (array.length > 0) {
            // 不相同
            if (array[array.length-1] !== s[i]) {
                counts = 0
                array.push(s[i])
                counts++
            } else { 
                // 相同时，只将少于3个的放入栈中
                if (counts+1 < 3) {
                    array.push(s[i])
                    counts++
                }  
            }
        } else {
            array.push(s[i])
            counts++
        }
    }
    return array.join("")
};
