/**
 * @index 841
 * @title 字符的最短距离
 * @difficulty 简单
 * @tags array,two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * @frontendId 821
*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * @date 2021/8/5
 */
var shortestToChar = function(s, c) {
const sList = s.split("")
    let cList  = []
    sList.forEach((item,index)=>{
        if(item === c) {
            cList.push(index)
        }
    })
    // console.log('cList:', cList)

    let array = []
    for(i =0;i<sList.length;i++) {
        let slow = 0
        if (sList[i] === c) {
            array.push(slow)
        } else {
            for(j=0;j<cList.length;j++) {
                const val = Math.abs(cList[j]-i)
                // console.log('val:',val)
                if (j === 0) {
                    slow = val
                } else if (j !== 0 && val < slow) {
                    slow = val
                }

            }
            array.push(slow)
        }
        
    }
    return array
};
