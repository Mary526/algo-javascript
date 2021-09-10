/**
 * @index 2006
 * @title 找到需要补充粉笔的学生编号
 * @difficulty 中等
 * @tags array,binary-search,prefix-sum,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk/
 * @frontendId 1894
*/

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 * @date 2021/9/10
 */
var chalkReplacer = function(chalk, k) {
let sum = 0
    chalk.forEach(item=>{
        sum += item
    })
    let remainer = k % sum 
    if (remainer === 0) return 0 

    for(let i =0 ;i < chalk.length ; i++) {
        if (remainer < chalk[i]) return i
        remainer = remainer - chalk[i]
    }
};
