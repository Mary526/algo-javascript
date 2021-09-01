/**
 * @index 165
 * @title 比较版本号
 * @difficulty 中等
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/compare-version-numbers/
 * @frontendId 165
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * @date 2021/9/1
 */
var compareVersion = function(version1, version2) {
let ver1 = version1.split(".")
    let ver2 = version2.split(".")
    const length = Math.max(ver1.length,ver2.length)
    const clearZero = (num) => {
        // console.log("num :", num)
        if (typeof num === 'undefined' || num === 0) return 0
        const list = num.split("")
        // console.log("splitList :", list)
        let array = []
        let flag = true
        for(j = 0;j<list.length;j++) {
            // if (flag && list[i] === '0') break
            if (!flag) {
                array.push(list[j])
            } else if (flag && list[j] !== '0') {
                flag = false
                array.push(list[j])
            }   
            // console.log('array',array,',j:',j)
        }
        // console.log('array:', array)
        return array.join("")
    }
    
    for (i = 0;i < length;i++) {
        const v1 = clearZero(ver1[i])
        const v2 = clearZero(ver2[i])
        // console.log("===i:", i,',',v1,',',v2,',v1 > v2',v1 > v2)
        if(Number(v1) > Number(v2)) return 1
        if(Number(v1) < Number(v2)) return -1 
        // index++
        if (i === length - 1) return 0
    }
};
