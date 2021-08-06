/**
 * @index 851
 * @title 山羊拉丁文
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/goat-latin/
 * @frontendId 824
*/

/**
 * @param {string} sentence
 * @return {string}
 * @date 2021/8/6
 */
var toGoatLatin = function(sentence) {
const vowelList = ['a','e','i','o','u']
    let sentenceList = sentence.split(" ")

    for(i=0;i<sentenceList.length;i++) {
        const item = sentenceList[i]
        if (vowelList.indexOf(item.slice(0,1).toLowerCase())>=0) {
            sentenceList[i] = item + 'ma'
        } else {
            sentenceList[i] = item.slice(1,item.length) + item.slice(0,1) + 'ma'
        } 
        sentenceList[i] = sentenceList[i] +  new Array(i+1).fill('a').join("")
    } 

    // console.log('sentenceList:', sentenceList)
    return sentenceList.join(" ")
};
