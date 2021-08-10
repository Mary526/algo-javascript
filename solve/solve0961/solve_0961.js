/**
 * @index 961
 * @title 长按键入
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/long-pressed-name/
 * @frontendId 925
*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 * @date 2021/8/10
 */
var isLongPressedName = function(name, typed) {
if (name.length > typed.length) return false
    if(name === typed) return true
    let slow = 0
    let nameLength = 1
    let fast = 0
    let fastLength = 0
    for(i = 0; i < name.length;i++) {
        // console.log("i+++", i,fast)
        // if(i === name.length - 1 && fast < typed.length-1) return false
        
        // 针对name走完了，但typed还没走完的情况
        // for example "saeedi"、"ssaaeediixxxiii"
        if (i === name.length -1 && typed.slice(fast,typed.length).replace(new RegExp(name[i],'g'),"") !== "") {
            // console.log('-----', typed.slice(fast,typed.length).replace(new RegExp(name[i],'g'),"") )
            return false
        }

        if (name[i] === name[i+1]) {
            nameLength++
        } else {
            slow = i 
             for(j = fast;j<typed.length;j++) {
                //  console.log('j:==', j)
                 if (typed[j] === name[slow]) { 
                     fastLength++
                 }  else {
                     break
                    //  return false
                 }
             }
            //  console.log("name[slow]",name[slow],",nameLength:", nameLength,",fastLength:",fastLength)
             if (nameLength  > fastLength) return false
             fast += fastLength
             // 步长初始化 
             nameLength = 1
             fastLength = 0
        }
         
    }
    return true
};
