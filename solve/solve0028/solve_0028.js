/**
 * @index 28
 * @title 实现 strStr()
 * @difficulty 简单
 * @tags two-pointers,string,string-matching
 * @draft false
 * @link https://leetcode-cn.com/problems/implement-strstr/
 * @frontendId 28
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @date 2021/7/7
 */
var strStr = function(haystack, needle) {
    if ( needle === '') return 0
    let i = -1
    const needleLen = needle.length
    const haystackLen = haystack.length
    let haystackList = haystack.split("")
    // console.log('needleLen:', needleLen, 'haystackLen:',haystackLen,'haystackList:',haystackList)
    haystackList.forEach((item,index)=>{
        console.log('item,index', item,index)
        if (haystackLen-index < needleLen) return
        const str = JSON.parse(JSON.stringify(haystackList)).slice(index,index+needleLen).join("")
        if (str !== needle) return
        if (i >= 0) return
        i = index
    })
    // console.log('==== i' , i)
    return i
};
