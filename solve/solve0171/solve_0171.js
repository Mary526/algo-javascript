/**
 * @index 171
 * @title Excel表列序号
 * @difficulty 简单
 * @tags math,string
 * @draft false
 * @link https://leetcode-cn.com/problems/excel-sheet-column-number/
 * @frontendId 171
*/

/**
 * @param {string} columnTitle
 * @return {number}
 * @date 2021/7/13
 */
var titleToNumber = function(columnTitle) {
    const amap = new Map([["A",1],["B",2],["C",3],["D",4],["E",5],["F",6],["G",7],["H",8],["I",9],["J",10],["K",11],["L",12],["M",13],["N",14],["O",15],["P",16],["Q",17],["R",18],["S",19],["T",20],["U",21],["V",22],["W",23],["X",24],["Y",25],["Z",26]])

    let len = columnTitle.length
    if (len === 1) {
        return amap.get(columnTitle)
    }

    let list = columnTitle.split("")
    let num = 0


    for(i=0;i<list.length - 1;i++) {
        const x = amap.get(list[i])
        const y = amap.get(list[i+1])
        //  console.log('x:', x,'y:',y)
        if(i === 0) {
            num = x*26+y
        } else  {
            num = num * 26 + y
        }
        // console.log('i:',i,'num,',num)
    }
    return num
};
