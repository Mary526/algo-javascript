/**
 * @index 824
 * @title 写字符串需要的行数
 * @difficulty 简单
 * @tags array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-lines-to-write-string/
 * @frontendId 806
*/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 * @date 2021/8/2
 */
var numberOfLines = function(widths, s) {
const sList = s.split("").map(item=>{
        return widths[item.charCodeAt() - 97]
    })
    
    let counts = 1
    let summary = 0

    // console.log("sList:", sList)

    for(j=0;j < sList.length ;j++) {
        const item = sList[j]
        // const nextItem = sList[j-1]

        if (summary + item  <= 100 ) {
            summary += item
        } else {
            counts += 1
            summary = item
        }
    }
    return [counts,summary]
};
