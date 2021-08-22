/**
 * @index 1274
 * @title 日期之间隔几天
 * @difficulty 简单
 * @tags math,string
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-days-between-two-dates/
 * @frontendId 1360
*/

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 * @date 2021/8/21
 */
var daysBetweenDates = function(date1, date2) {
const days = ( new Date(date1).getTime() - new Date(date2).getTime())/(24*60*60*1000)
    // console.log('days',Math.abs(days))
    return Math.abs(days)
};
