/**
 * @index 981
 * @title 删列造序
 * @difficulty 简单
 * @tags array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/delete-columns-to-make-sorted/
 * @frontendId 944
*/

/**
 * @param {string[]} strs
 * @return {number}
 * @date 2021/8.14
 */
var minDeletionSize = function(strs) {
const length = strs[0].length
    let index = 0

    for(i = 0;i < length; i++) {
        for(j=0;j<strs.length-1;j++) {
            if(strs[j][i].charCodeAt() > strs[j+1][i].charCodeAt()) {
                index += 1
                break
            }
        }
    }

    return index
};
