/**
 * @index 965
 * @title 独特的电子邮件地址
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/unique-email-addresses/
 * @frontendId 929
*/

/**
 * @param {string[]} emails
 * @return {number}
 * @date 2021/8/11
 */
var numUniqueEmails = function(emails) {
let amap = new Map()
    for(i = 0;i<emails.length;i++) {
        const ipIndex = emails[i].indexOf('@')
        const plusIndex = emails[i].indexOf('+')
        // console.log("ipIndex", ipIndex,',plusIndex:',plusIndex)

        const string =  (emails[i].slice(0,plusIndex>=0?plusIndex:ipIndex)).replace(/[.]/g,'') + emails[i].slice(ipIndex,emails[i].length)
        // console.log(plusIndex>=0?plusIndex:(ipIndex+1))

        if (!amap.has(string))  {
            amap.set(string,1)
        } else {
            amap.set(string, amap.get(string)+1)
        }
    }

    // console.log('amap:', amap)
    return amap.size
};
