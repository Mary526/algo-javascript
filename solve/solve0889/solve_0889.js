/**
 * @index 889
 * @title 亲密字符串
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/buddy-strings/
 * @frontendId 859
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * @date 2021/8/8
 */
var buddyStrings = function(s, goal) {
if (s.length !== goal.length) return false
    if (s === "") return true

    let amap = new Map()
    for (i =0;i<s.length;i++) {
        if (s[i] !== goal[i]){
            amap.set(i,s[i])
        }
    }
    // console.log('amap.size',amap.size,amap)
    
    if (amap.size === 0)   {
        // 判断字符串里面是否有相同的字符
        let bmap = new Map()
        for (j=0;j<s.length;j++){
            if (!bmap.has(s[j])){
                bmap.set(s[j],1)
            } else {
                return true
            }
        }
        return false
    } else if (amap.size%2 === 1) {
        // 当有只有一个不相同时，不能通过交换位置来相同
        return false
    }
    const keys = Array.from(amap.keys())
    const values = Array.from(amap.values())
    // console.log("amap:", amap,keys,values)
    let sList = s.split("")
    sList[keys[0]] = values[1]
    sList[keys[1]] = values[0]
    // s[1] = 'a'
    // s[0] = 'b'
    // console.log("sList:",sList.join(""),',goal:', goal)

    return sList.join("") === goal
};
