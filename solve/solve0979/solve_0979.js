/**
 * @index 979
 * @title 增减字符串匹配
 * @difficulty 简单
 * @tags greedy,array,math,two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/di-string-match/
 * @frontendId 942
*/

/**
 * @param {string} s
 * @return {number[]}
 * @date 2021/8/13
 */
var diStringMatch = function(s) {
const array =  Array.from(Array(s.length+1)).map((item,index)=>index)
    let slow = 0
    let fast = s.length 
    let A = []

    // console.log("array:", array,A)
    for(i=0;i<s.length+1;i++) {
        switch (s[i]) {
            case 'I': 
                // console.log('i:',i,'slow:',slow, array[slow])
                A.push(array[slow]) 
                slow++
                
            break
            case 'D':
            // console.log('i:',i,'fast:',fast, array[fast])
                A.push(array[fast] )
                fast--
                break 
            default: 
                // console.log('i:',i,"slow:", slow)
                A.push(array[slow])
            break
        }
    }

    return A
};
