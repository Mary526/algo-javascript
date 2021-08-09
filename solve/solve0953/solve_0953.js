/**
 * @index 953
 * @title 仅仅反转字母
 * @difficulty 简单
 * @tags two-pointers,string
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-only-letters/
 * @frontendId 917
*/

/**
 * @param {string} s
 * @return {string}
 * @date 2021/8/9
 */
var reverseOnlyLetters = function(s) {
let c = s.split("")
    let point = s.length - 1
    // const symbols = ['-','=','!','^','#','@',]
 
    for(i=0;i<c.length;i++) {
        if (point > 0 && s[i].toLowerCase().charCodeAt()>=97 && s[i].toLowerCase().charCodeAt()<=122) {
            // console.log('i:',i,'point:', point)
            for(j=point;j>0;j--) {
                // console.log('=========i:', i,',j:',j,',s[j]:',s[j])
                if (i < j && s[j].toLowerCase().charCodeAt()>=97 && s[j].toLowerCase().charCodeAt()<=122 ) {
                    // console.log('i:',i,'j:',j,"c[i]:",c[i],'c[j]:',c[j])
                    const temp = s[i]
                    c[i] = s[j]
                    c[j] = temp 
                    // console.log('c:', c)
                    point = j - 1
                    break
                }
            } 
        }
    }
    return c.join("")
};
