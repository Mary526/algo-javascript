/**
 * @index 567
 * @title 字符串的排列
 * @difficulty 中等
 * @tags hash-table,two-pointers,string,sliding-window
 * @draft false
 * @link https://leetcode-cn.com/problems/permutation-in-string/
 * @frontendId 567
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * @date 2021/11/21
 */
var checkInclusion = function(s1, s2) {
const length1 = s1.length , length2 = s2.length
    let flag = false

    // 长度这里需要注意找补1位，因为是从0开始计数
    for(i = 0; i < length2 - length1 + 1 ;i++) {
        const string2Compare = s2.slice(i,i+length1)
        // console.log("string2Compare:",string2Compare)
        let amap = new Map() 
        for(j = 0 ; j < string2Compare.length ; j++) {
            if(!amap.has(string2Compare[j])) {
                amap.set(string2Compare[j],1)
            } else {
                amap.set(string2Compare[j],amap.get(string2Compare[j]) + 1)
            }
        }

        // console.log("amap:", amap)

        for(m = 0 ; m < length1 ; m++) {
            if(!amap.has(s1[m])) {
                // flag = false
                break
            } else {
                if (amap.get(s1[m]) === 0) {
                    // flag = false
                    break
                } else {
                    amap.set(s1[m],amap.get(s1[m]) - 1)
                }
                
            }
        }

    //    console.log("amap:", amap,',flag:', flag) 
    //    if (flag) {
        let counts = 0
           for([keys,values] of amap) {
               if (values !== 0) {
                //    flag = false
                   break
               } else {
                   counts++
               }
           }
    //    }
            // console.log("counts:", counts)

            // 这里主要是判断，确保处理后的map里每一个字母出现的次数都为0
            if (counts === amap.size) {
                flag = true
                return flag
            }

    }

    return flag
};
