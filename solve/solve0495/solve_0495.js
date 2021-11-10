/**
 * @index 495
 * @title 提莫攻击
 * @difficulty 简单
 * @tags array,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/teemo-attacking/
 * @frontendId 495
*/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * @date 2021/11/10
 */
var findPoisonedDuration = function(timeSeries, duration) {
if(timeSeries.length === 1) return duration
    let seconds = 0
    for(let i = 1;i<timeSeries.length;i++) {
        if (timeSeries[i]-timeSeries[i-1] > duration) {
            seconds += duration
        } else {
            seconds += timeSeries[i]-timeSeries[i-1]
        }
    }
    return seconds+duration
};
