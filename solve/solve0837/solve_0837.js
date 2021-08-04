/**
 * @index 837
 * @title 最常见的单词
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/most-common-word/
 * @frontendId 819
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * @date 2021/8/4
 */
var mostCommonWord = function(paragraph, banned) {
let paragraph2List = paragraph.replace(/[!?',;.]/g," ").toLowerCase().split(" ").filter(item =>  item !== "")
    // console.log("paragraph2List:", paragraph2List)
    let amap = new Map()

    let key = 0
    let value = 0

    for(i = 0; i < paragraph2List.length ; i++) {
        const item = paragraph2List[i]
        // console.log(i,item,key,value)
        if (!banned.includes(item) && item !== "") {
            if (!amap.has(item)) {
                amap.set(item,1)
                // 只有在第一次时
                if (key === 0) {
                    value = 1
                    key = item
                }
            } else {
                const counts = amap.get(item)+1
                
                if (counts > value) {
                    value = counts
                    key = item
                } 
                amap.set(item, counts)
            }
        }
    }

    // console.log("amap: ", amap, key, value)

    return key
};
