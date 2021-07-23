/**
 * @index 541
 * @title 反转字符串 II
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-string-ii/
 * @frontendId 541
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
const sList = s.split("")
    const len = sList.length

    // 判断极值情况
    if (k > len) return sList.reverse().join("")
    let list = []
    let times = parseInt(len / (2*k))
    // 长度为2k的整数倍
    if (len % (2*k) === 0) {
        for(i=0;i<times;i++) {
            const item1 = sList.slice(i*2*k,　i*2*k+k).reverse()
            const item2 = sList.slice(i*2*k+k,i*2*k+2*k)
            // console.log("item1:",item1,",item2:",item2)

           list =  list.concat(item1).concat(item2)
        }
        // console.log("list:", list)
        return list.join("")

    } else {
        // 长度不为2k的整数倍
    for(i=0;i<(times+1);i++) {
            // 最后一节儿 不是2k的整数倍
            // console.log("i:",i,',times:',times+1)
            if (i === times+1) {
                const val = len - times*2*k
                const item1 = val < k ? sList.slice(i*2*k,　len).reverse() :sList.slice(i*2*k,　i*2*k+k).reverse()
                const item2 = val < k ? [] :sList.slice(i*2*k+k,len)
                // console.log("item1:",item1,",item2:",item2)
                list =  list.concat(item1).concat(item2)
            } else {
                    const item1 = sList.slice(i*2*k,　i*2*k+k).reverse()
                    const item2 = sList.slice(i*2*k+k,i*2*k+2*k)
                    // console.log("item1:",item1,",item2:",item2)
                    list =  list.concat(item1).concat(item2)

            }  
        }

        // console.log("list:", list)
        return list.join("")
};
