/**
 * @index 742
 * @title 转换成小写字母
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/to-lower-case/
 * @frontendId 709
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/7/28
 */
var toLowerCase = function(s) {
return s.split("").map(item =>{
        const charCode = item.charCodeAt()
        if ( charCode >= 65 && charCode <= 90){
            return String.fromCharCode(charCode + 32)
        }
        return item
    }).join("")
};
