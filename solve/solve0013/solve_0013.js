/**
 * @index 13
 * @title 罗马数字转整数
 * @difficulty 简单
 * @tags hash-table,math,string
 * @draft false
 * @link https://leetcode-cn.com/problems/roman-to-integer/
 * @frontendId 13
*/

/**
 * @param {string} s
 * @return {number}
 * @date 2021/7/1
 */
var romanToInt = function(s) {
    if (s.length < 1  || s.length > 15) return
    let s2list = s.split("")
    //  const finded = s2list.find(item=>['I', 'V', 'X', 'L', 'C', 'D', 'M'].indexOf(item)>=0)
    //  if (finded) return

    const m = new Map([['I', 1], ['V', 5], ['X', 10],['L',50],['C',100],['D',500],['M',1000]]);
    s2number = s2list.map(item=>{
        const n =  m.get(item)
        return n
    })
    // console.log('==s2number',s2number)
    let s2number2 = s2number.map((item,index)=>{
        if (index + 1 === s2number.length) return item
        let current = item
        let next = s2number[index + 1]
        if (current < next) {
            current = current * (-1)
        }
        return current
    })
    // console.log('==s2number2',s2number2)

    let sum = 0
    s2number2.forEach(item=>{
        sum = item + sum
    })
    return sum
};
