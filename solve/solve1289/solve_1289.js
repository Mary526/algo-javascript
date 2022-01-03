/**
 * @index 1289
 * @title 一周中的第几天
 * @difficulty 简单
 * @tags math
 * @draft false
 * @link https://leetcode-cn.com/problems/day-of-the-week/
 * @frontendId 1185
*/

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @date 2022/1/3
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    let days = 365*(year - 1971) + Math.floor((year -1969) / 4) 
    // console.log("days",day)
    for(let i = 0 ; i < month - 1 ; i++) {
        days += monthDays[i]
    }
    // 闰年
    if((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month >= 3) {
        days += 1
    }
    days += day

    return weeks[(days + 3) % 7];
};
