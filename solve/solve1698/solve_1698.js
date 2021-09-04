/**
 * @index 1698
 * @title 替换所有的问号
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
 * @frontendId 1576
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/9/4
 */
var modifyString = function(s) {
let sList = s.split("")
    for (let i = sList.length - 1;i >= 0; i--) {
        let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        // console.log('i', sList[i], sList[i] === '?')
        if (sList[i] === '?') {
            // 进行替代
            if (sList[i+1]) {
                letters = letters.filter(item => {return item !== sList[i+1]})
            }
            if (sList[i-1]) {
                letters = letters.filter(item => {return item !== sList[i-1]})
            }
            // console.log("letters:", letters)
            sList[i] = letters[0]
            // console.log('===', sList[i])
        }
    }
    return sList.join("")
};
