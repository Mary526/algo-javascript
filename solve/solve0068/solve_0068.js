/**
 * @index 68
 * @title 文本左右对齐
 * @difficulty 困难
 * @tags string,simulation
 * @draft false
 * @link https://leetcode-cn.com/problems/text-justification/
 * @frontendId 68
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 * @date 2021/9/9
 */
var fullJustify = function(words, maxWidth) {
let n = 0
    let array = []  
    let counts = 0

    const handle2String = (list,n,last) => { 
        const mode = " "
        let strings = []
        
        

        // 1. 特殊情况 如果只有一个单词，就不用计算步长（分母为0），本身就是左对齐
        if (list.length === 1) {
            strings = list.concat(Array(maxWidth - n).fill(mode))
            return strings.join("")
        }

        // 2.特殊情况 最后一行位左对齐 且单词之间不插入额外的空格
        if (last) {
             for (let m = 0; m < list.length;m++) {
                 strings.push(list[m])
                 if (m !== list.length - 1) {
                    strings = strings.concat(mode)
                 } else {
                     strings = strings.concat(Array(maxWidth - n - list.length + 1).fill(mode))
                 }
             }
             return strings.join("")
        }
        
        // 3. 普通情况
        // 空格的步长
        // 如果空位平均分布
        let remainer = (maxWidth - n )%(list.length-1)
        // 空格的步长
        const spaces = (maxWidth - n - remainer)/ (list.length-1)

        // console.log('remainer:', remainer, ',spaces:', spaces)

        for (let k = 0; k < list.length ; k++) {
            strings.push(list[k])
            if (k !== list.length - 1) {
                strings = strings.concat(Array(spaces).fill(mode))
                if (remainer > 0) {
                    strings.push(mode)
                    remainer--
                }
            }
        }


        // const flag = (maxWidth - n )%(list.length-1) === 0
        // console.log("flag:", flag,',余数：', (maxWidth - n )%(list.length-1))
        // if (flag) { // - 空格可以平均分布
        //     const spaces =  (maxWidth - n )/(list.length-1) 
        //     // console.log("list:", list, ', n:', n,', spaces:', spaces)
            
        //     for(k = 0; k < list.length; k++) {
        //         strings.push(list[k])
        //         // 第一项 特别情况 左边的空格要多一些 
        //         if ( k !== list.length - 1) {
        //             strings =   strings.concat(Array(spaces).fill(mode))
        //         }  
        //     }
        // } else { // - 空格不能平均分布
        //     const a = (maxWidth - n )%(list.length-1)
        //      const spaces =  (maxWidth - n - a )/(list.length-1)
        //     console.log("list:", list, ', n:', n,', spaces:', spaces)
        //     // console.log('maxWidth:',maxWidth,',list:',list,',n:', n ,',a:', a, ', spaces:', spaces)
        //     for(k = 0; k < list.length; k++) {
                
        //         // 第一项 特别情况 左边的空格要多一些
        //         if (k === list.length - 1) { 
        //             strings = strings.concat(Array(maxWidth - n - (list.length-2)*spaces ).fill(mode))
        //             strings.push(list[k])
        //         } else if ( k === list.length - 2){
        //             strings.push(list[k])
        //         } else if (k !== list.length - 1 && k !== list.length - 2) {
        //             strings.push(list[k])
        //         strings =   strings.concat(Array(spaces).fill(mode))
        //         }  
        //     }
        // }
 

        return strings.join("")
    }

    for ( let i = 0;i < words.length  ;i++) { 

        // 没有到尾端的元素； 要注意=> 单词与单词之间至少要有一个空格
        if (i !== words.length -1 && n + words[i].length + words[i+1].length + counts >= maxWidth)   {
            // console.log('i:', i, ',length:', words[i].length,',n:' ,n)

            // console.log("处理后的字符串：" ,words.slice(i - counts,i+1), ',:',n+words[i].length,',','counts:', counts )

            let stringAfterHandle = handle2String(words.slice(i - counts,i+1),n+words[i].length)

            // console.log("===", stringAfterHandle)
            
            // array.push(words.slice(i - counts,i+1))

            array.push(stringAfterHandle)
            counts = 0
            n = 0
        } else if (i === words.length -1 ) { // 最后一个元素，也需要判断，多个元素之间至少要有一个空格
            // console.log('i:',i ,',n:', n,',words[i].length:', words[i].length,',counts :', counts)
            if (n + words[i].length + counts > maxWidth) {
                // array.push(words.slice(i - counts, i))
                // array.push(words.slice(i))
            let stringAfterHandle1 = handle2String(words.slice(i - counts,i),n)
            array.push(stringAfterHandle1)
            let stringAfterHandle2 = handle2String(words.slice(i),words[i].length,true)
            array.push(stringAfterHandle2)
            

            } else {
            //    array.push(words.slice(i - counts)) 
            let stringAfterHandle = handle2String(words.slice(i - counts),n+words[i].length, true)
            array.push(stringAfterHandle)
            }
            
        } else {
            n += words[i].length
            counts++
        } 
    } 

    // console.log('array:', array)

   
    return array
};
