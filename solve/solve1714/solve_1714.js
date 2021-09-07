/**
 * @index 1714
 * @title 重新排列单词间的空格
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/rearrange-spaces-between-words/
 * @frontendId 1592
*/

/**
 * @param {string} text
 * @return {string}
 * @date 2021/9/7
 */
var reorderSpaces = function(text) {
const array = text.split("")
    let spaceCounts = 0
    let tempArray = []
    let characters = []
    // console.log('array:', array) 
    for(let i = 0 ; i < array.length ; i++) {
        // console.log("i:", i,'array[i]:', array[i])
        if (array[i] === ' ') {
            // console.log('tempArray:', tempArray)
            if (tempArray.length > 0) {
                characters.push(tempArray.join(""))
                tempArray = []
            }
            spaceCounts++
        } else { 
            tempArray.push(array[i])
            if (i === array.length - 1 && tempArray.length > 0) {
                characters.push(tempArray.join(""))
                tempArray = []
            }
            
        }
    }

    // 兼容time 为 Infinity的情况
    // console.log("characters:", characters, ', spaceCounts:', spaceCounts,characters.length === 1)
    if (characters.length === 1) {
        for(let n = 0;n < spaceCounts ;n++) {
            // console.log('n:', n)
            characters.push(' ')
        }
        // console.log("characters++++",characters)
        return characters.join("")
    }

    const times = Math.floor(spaceCounts / (characters.length - 1))

    // 兼容times为0的情况
    if (times === 0) return text

    // console.log("times:", times)

    let finalArray = []

    for(let j = 0 ; j < characters.length ; j++) {
         finalArray.push(characters[j])
        if (j === characters.length - 1) {
            for(m = 0 ;m < spaceCounts - times * (characters.length - 1) ;m++) {
                finalArray.push(' ')
            }
        } else {
            for(k = 0 ;k < times ;k++) {
                finalArray.push(' ')
            }
        }
        
        
    }

    return finalArray.join("")
};
