/**
 * @index 3
 * @title 无重复字符的最长子串
 * @difficulty 中等
 * @tags hash-table,string,sliding-window
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @frontendId 3
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/11/21
 */
var lengthOfLongestSubstring = function(s) {
if (s === "") return 0
    let counts = 0
    for(i = 0;i < s.length ; i++) {

        let max = 1 , amap = new Map()
        amap.set(s[i],1)
        // console.log("amap:", amap)
        for(j = i + 1;j < s.length ;j++) {
            // console.log("s[j]:", s[j])
            if(!amap.has(s[j])) {
                amap.set(s[j],1)
                max++
            } else {
                break
            }
            
        }
        // console.log("max:", max)

        counts = Math.max(max,counts)
    }

    return counts
};
