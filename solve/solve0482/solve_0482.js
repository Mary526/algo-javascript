/**
 * @index 482
 * @title 密钥格式化
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/license-key-formatting/
 * @frontendId 482
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * @date 2021/7/19
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replace(/-/g,'')
    if (k > s.length) return s

    let times = s.length % k === 0?(s.length) / k:(parseInt(s.length / k)+1)
    // console.log('times:', times , ',s:', s,',length:', s.length)

    let list = []
    for(i=0;i<times;i++) {
        // console.log('i:', i)
        if (i !== times -1) {
            const item = s.slice(s.length-(i+1)*k,s.length - i*k).toUpperCase()

            // console.log('item1:', item)
            list.push(item)
        } else {
            const item = s.slice(0,s.length - k*i).toUpperCase()
            // console.log('item2:', item)
            list.push(item)
        }
    }
    // console.log('list1:',list)
    const string = list.reverse().join('-')
    // console.log('list:', list,',string:', string)
    return string
};
