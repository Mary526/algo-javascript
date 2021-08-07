/**
 * @index 857
 * @title 较大分组的位置
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/positions-of-large-groups/
 * @frontendId 830
*/

/**
 * @param {string} s
 * @return {number[][]}
 * @date 2021/8/7
 */
var largeGroupPositions = function(s) {
 let array = []
    let index = 0
    let letter = ''
    const sList = s.split("")
    for(i = 0; i < sList.length; i++) {
        // console.log("iii:",i)
        const item = sList[i]
        const nextItem = sList[i+1]
    // console.log(index,',',i,',',item,',', nextItem,',',letter)
    // console.log('i:',i,',index:', index)
        
        if(i === 0) {
            // console.log('i1:',i)
            letter = item
            if(nextItem !== letter) {
                index = i + 1
                letter = nextItem
            }
        } else {
            if (!nextItem) {
                // console.log('i2:',i)
                if (item === letter && i - index >= 2) {
                    array.push([index,i])
                }
            } else {
                if ( nextItem !== letter) {
                    // console.log('i3:',i)
                    // console.log('i - index:', i-index)
                        if ( i - index >= 2) {
                            // console.log("index:,",index,',i:',i)
                            array.push([index, i])
                        }
                        index = i + 1
                        letter = nextItem
                } 
            }
        } 
        
        
    }

    return array
};
