/**
 * @index 920
 * @title 两句话中的不常见单词
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/
 * @frontendId 884
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * @date 2021/8/8
 */
var uncommonFromSentences = function(s1, s2) {
if (s1.length < 1 && s2.length < 2) return []
    const checkMap =(string)=>{
        const array = string.split(" ")
        let amap = new Map()
        for(i=0;i<array.length;i++) {
            const item = array[i]
            if (!amap.has(item)) {
                amap.set(item,1)
            } else {
                amap.set(item, amap.get(item)+1)
            }
        }
        return amap
    }

    const s1Map = checkMap(s1)
    const s2Map = checkMap(s2)

    // console.log("s1Map:", s1Map,',s2Map:', s2Map)
    let arrays = []
    for([key,value] of s1Map.entries()) {
        // console.log("key,value",key,value)
        if (value === 1 && !s2Map.has(key)) {
            arrays.push(key)
        }
    }
    for([key,value] of s2Map.entries()) {
        if (value === 1 && !s1Map.has(key)) {
            arrays.push(key)
        }
    }

    return arrays
};
