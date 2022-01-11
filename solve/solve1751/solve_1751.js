/**
 * @index 1751
 * @title 按键持续时间最长的键
 * @difficulty 简单
 * @tags array,string
 * @draft false
 * @link https://leetcode-cn.com/problems/slowest-key/
 * @frontendId 1629
*/

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 * @date 2022/1/11
 */
var slowestKey = function(releaseTimes, keysPressed) {
let ansMap = new Map() , max = -Infinity 

    for(let i = 0 ; i < keysPressed.length ; i++) {
        // 考虑特殊情况
        if(i === 0) {
            ansMap.set(keysPressed[i], releaseTimes[i])
            max = releaseTimes[i]
            continue
        }
        // 其它
        if(!ansMap.has(keysPressed[i])) {
            const temp = releaseTimes[i] - releaseTimes[i-1]
            max = Math.max(max,temp)
             ansMap.set(keysPressed[i], temp)
        } else {
            const preReleaseTime = ansMap.get(keysPressed[i])
            const currentReleaseTime = releaseTimes[i] - releaseTimes[i-1]
            const temp = Math.max(preReleaseTime,currentReleaseTime)
            max = Math.max(max,temp)
            ansMap.set(keysPressed[i], temp)
        }
    }

    // console.log('max', max, ansMap)
    let res = []
    for([keys, values] of ansMap) {
        if(values < max) continue
        res.push([keys,values])
    }
    res.sort((a,b)=>b[0].charCodeAt() - a[0].charCodeAt())
    // console.log('res', res)
    return res[0][0]
};
