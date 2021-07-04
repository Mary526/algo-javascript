/**
 * @index 20
 * @title 有效的括号
 * @difficulty 简单
 * @tags stack,string
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-parentheses/
 * @frontendId 20
*/

/**
 * @param {string} s
 * @return {boolean}
 * @date 2021/7/4
 */
var isValid = function(s) {
    let flag = false
    const length = s.length

    if (length < 1 || length > 10**4) return flag
    if (length % 2 !== 0) return flag

    for(i=0;i<(length/2);i++) {
        s=  s.replace("()","").replace("[]","").replace("{}","")
        console.log("====", s)
    }
    return s === ""

    // const s2List = s.split("")


    // console.log("s2List",s2List)
    // const myMap = new Map()
    // myMap.set("{", "}");
    // myMap.set("}", "{");
    // myMap.set("[", "]");
    // myMap.set("]", "[");
    // myMap.set("(", ")");
    // myMap.set(")", "(");

    // ！！！左括号必须以正确的顺序闭合

    // const   checkOddIsValid =()=> {
    //     let flag1 = true
    //     s2List.forEach((item,index)=>{

    //         if (["(","{","["].indexOf(item)<0) return
    //         const a = myMap.get(item)
    //         const b = s2List.indexOf(a)
    //         console.log('index,b',index, b)
    //         if (b < index) {
    //              flag1 = false
    //              return
    //         }
    //          if ((b-index)%2 !== 0) {
    //              flag1 = false
    //              return
    //          }
    //     })
    //     return flag1
    // }
    // const flag1 = checkOddIsValid()
    // if (!flag1) return flag

    // const firstStr = s2List.slice(0, s.length/2)
    // const firstStrTransform =  firstStr.map(item => {
    //     const transformItem = myMap.get(item)
    //     return transformItem
    // }).reverse()
    // console.log('firstStr', firstStr)
    // console.log("firstStrTransform",firstStrTransform.join(""))
    // const lastStr = s2List.slice(s.length/2,s.length)
    // console.log('lastStr', lastStr.join(""))
    // 情况一： 对称相同
    // if (firstStrTransform.join("") === lastStr.join("")) {
    //     flag = true
    // }
    // if (flag) return flag
    // 情况二：多截对称相同
    // const checkIsSymmetry = () =>{
    //     const length = s.length / 2
    //     let flagType = true
    //     for(i= 0;i<length;i++) {
    //         const currentStr = s2List[2*i]
    //         const preStr = myMap.get(currentStr)
    //         const nextStr = s2List[2*i + 1]
    //         if (preStr !== nextStr) {
    //             flagType = false
    //         }
    //     }

    //     return flagType
    // }

    //  const flagType = checkIsSymmetry()
    //  if (flagType) {
    //      flag = true
    //  }

    // return flag
};
