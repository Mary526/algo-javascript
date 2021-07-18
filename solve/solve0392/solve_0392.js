/**
 * @index 392
 * @title 判断子序列
 * @difficulty 简单
 * @tags two-pointers,string,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/is-subsequence/
 * @frontendId 392
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @date 2021/7/17
 */
var isSubsequence = function(s, t) {
    if (s === "") return true
    let sList = s.split("")
    let tList = t.split("")
    let i = 0;
    for(j=0;j<tList.length;j++) {
        if(sList[i]===tList[j]) {
            i = i + 1
        }

    }
    // console.log("i:",i )
    return i === sList.length
};
