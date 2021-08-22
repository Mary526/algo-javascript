/**
 * @index 1283
 * @title 转变日期格式
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/reformat-date/
 * @frontendId 1507
*/

/**
 * @param {string} date
 * @return {string}
 * @date 2021/8/22
 */
var reformatDate = function(date) {
const dates = date.split(" ")
    let day = dates[0].substring(0, dates[0].length-2)
    if (day.length === 1) {
        day = '0'+day
    }
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(dates[1]) + 1
    // console.log('month', month,month.toString().length)
    if (month.toString().length === 1) {
        month = '0'+ month
    }
    return `${dates[2]}-${month}-${day}`
};
