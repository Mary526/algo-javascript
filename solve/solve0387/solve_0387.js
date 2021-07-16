/**
 * @index 387
 * @title 字符串中的第一个唯一字符
 * @difficulty 简单
 * @tags queue,hash-table,string,counting
 * @draft false
 * @link https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @frontendId 387
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/7/16
 */
var firstUniqChar = function(s) {
    if (s.trim() === "") return -1
    let sList = s.toLowerCase().split("")
    let i = -1

    // 快指针 和 慢指针
    for (slow = 0;slow < sList.length ; slow++ ) {
        // console.log('=slow:', slow,sList[slow])
        i = slow
        let flag = 0
        for (quick = 0 ; quick < sList.length ; quick++) {

            if (sList[quick] === sList[slow]) flag++
            // console.log('quick:', quick,',flag:',flag)
            if (flag > 1) {
                i = -1
                break
            }
            if (quick === sList.length -1) return slow
        }
    }

    // console.log('i:', i)
    return i
};
