/**
 * @index 974
 * @title 重新排列日志文件
 * @difficulty 简单
 * @tags array,string,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/reorder-data-in-log-files/
 * @frontendId 937
*/

/**
 * @param {string[]} logs
 * @return {string[]}
 * @date 2021/8/12
 * @desc 这个题难到我了，直接抄的作业
 */
var reorderLogFiles = function(logs) {
let arr1 = [];
    let arr2 = [];
    for(let i of logs) i[i.length-1].match(/\d/)==null?arr1.push(i):arr2.push(i);
    // console.log("arr1:", arr1, "arr2:", arr2)
    arr1.sort();
    arr1.sort((x,y) =>{
        return x.slice(x.indexOf(' ')) < y.slice(y.indexOf(' ')) ? -1:1
    })

    return arr1.concat(arr2); 
};
