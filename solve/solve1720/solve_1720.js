/**
 * @index 1720
 * @title 文件夹操作日志搜集器
 * @difficulty 简单
 * @tags stack,array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/crawler-log-folder/
 * @frontendId 1598
*/

/**
 * @param {string[]} logs
 * @return {number}
 * @date 2021/9/9
 */
var minOperations = function(logs) {
let step = 0
    for(let i = 0 ;i < logs.length ;i++) {
        const item = logs[i].replace('/','')
        // console.log("0:", i , ',item: ', item)
        if (item === '.') {
            step += 0
        } else if (item === '..') {
            if (step !== 0) {
                step += -1
            }
        } else {
            step += 1
        }

    }

    return step
};
