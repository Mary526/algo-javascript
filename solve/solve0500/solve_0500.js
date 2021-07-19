/**
 * @index 500
 * @title 键盘行
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/keyboard-row/
 * @frontendId 500
*/

/**
 * @param {string[]} words
 * @return {string[]}
 * @date 2021/7/20
 */
var findWords = function(words) {
    const checkEqual = (item, string) =>{
        const sList = string.split("")
        // console.log('item:', item, ',string:', string,',sList:', sList)

        let flag = true
        for(j=0;j<item.length;j++) {
            if(sList.indexOf(item[j])<0) {
                flag = false
            }
        }

        return flag
    }

    let list = []
    for(i=0;i<words.length;i++){
        const item = words[i].toLocaleLowerCase().split("")
        const flag1 = checkEqual(item,'qwertyuiop')
        if (flag1) {
            list.push(words[i])
        } else {
            const flag2 = checkEqual(item,'asdfghjkl')
            if (flag2) {
                list.push(words[i])
            } else {
                const flag3 = checkEqual(item,'zxcvbnm')
                if (flag3) {
                    list.push(words[i])
                }
            }
        }

    }

    // console.log('list:', list)
    return list
};
