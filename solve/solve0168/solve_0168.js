/**
 * @index 168
 * @title Excel表列名称
 * @difficulty 简单
 * @tags math,string
 * @draft false
 * @link https://leetcode-cn.com/problems/excel-sheet-column-title/
 * @frontendId 168
*/

/**
 * @param {number} columnNumber
 * @return {string}
 * @date 2021/7/13
 */
var convertToTitle = function(columnNumber) {
    // const amap = new Map([["A",1],["B",2],["C",3],["D",4],["E",5],["F",6],["G,7"],["H",8],["I",9],["J",10],["K",11],["L",12],["M",13],["N",14],["O",15],["P",16],["Q",17],["R",18],["S",19],["T",20],["U",21],["V",22],["W",23],["X",24],["Y",25],["Z",26]])

    const amap = new Map([[0,"Z"],[1,"A"],[2,"B"],[3,"C"],[4,"D"],[5,"E"],[6,"F"],[7,"G"],[8,"H"],[9,"I"],[10,"J"],[11,"K"],[12,"L"],[13,"M"],[14,"N"],[15,"O"],[16,"P"],[17,"Q"],[18,"R"],[19,"S"],[20,"T"],[21,"U"],[22,"V"],[23,"W"],[24,"X"],[25,"Y"],[26,"Z"]])
    // console.log("amap",Object.keys(amap).length)
    const amapLen = 26
    // 如果小于26，直接从map中取值
    if (columnNumber < amapLen + 1) {
        return amap.get(columnNumber)
    }
    let list = []
    const checkNumber = (v)=>{


        let num1 = v%26
        let num2 = parseInt(v/26)
        // 特殊情况余数为0
        if (num1 === 0 && num2 > 0) {
            list = [num1,num2-1]
            return
        }
        list.push(num1)
        // 除不尽的情况
        if (num2 > 26) {
            return   checkNumber(num2)
        }
        list.push(num2)
    }

    checkNumber(columnNumber)
    //  console.log('list', list)
    if (list.length < 1) return
    let string = list.map(item=>{
        //  console.log('amap', item,typeof(item),amap.get(item))
        return amap.get(item)
    }).reverse().join("")
    //  console.log('==string', string)
    return string
};
