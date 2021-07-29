/**
 * @index 749
 * @title 最短补全词
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/shortest-completing-word/
 * @frontendId 748
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 * @date 2021/7/29
 */
var shortestCompletingWord = function(licensePlate, words) {
    let index = 0
    let length = 0
    let array = new Array(words.length).fill(0)
    const licensePlateList = licensePlate.split("").filter(item =>{
        if (item === "") return
        const chartCode = item.toLowerCase().charCodeAt()

        if (chartCode <= 122 && chartCode >=97)  {
            return  item
        }
    }).map(a=> {return a.toLowerCase()})
    // console.log('licensePlateList:',  licensePlateList)

    let wordsTemp = JSON.parse(JSON.stringify(words))

    //  words进行循环遍历
    for(k=0;k<wordsTemp.length;k++) {
        for (j=0;j<licensePlateList.length;j++) {
            // console.log('wordsTemp[k]:',wordsTemp[k],',licensePlateList[j]:', licensePlateList[j])
            if (wordsTemp[k].indexOf(licensePlateList[j])>=0){
                array[k] += 1
            }
            wordsTemp[k] =   wordsTemp[k].replace(licensePlateList[j],'')
        }

        // console.log("wordsTemp[k]:", wordsTemp[k],array)

        if (array[k] === licensePlateList.length) {
            if ((index === 0 && length === 0) || (wordsTemp[k].length < length)) {
                index = k
                length = wordsTemp[k].length
            }
        }

    }

    // console.log('index:', index)
    return words[index]
};
