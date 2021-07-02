/**
 * @index 14
 * @title 最长公共前缀
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-common-prefix/
 * @frontendId 14
*/

/**
 * @param {string[]} strs
 * @return {string}
 * @date 2021/7/2
 */
var longestCommonPrefix = function(strs) {
    let attr = ""
    if (strs.length<0 || strs.length > 200) return attr

    const firstStr = strs[0]
    const firstList = firstStr.split("")
    // console.log("first", firstStr,firstList)

    const checkHasCommonPrefix = (prefix,index) =>{
        // console.log('prefix & index', prefix, index)
        let flag = true
        strs.forEach(childItem =>{
            const childPrefix = childItem.slice(0,index+1)
            // console.log("输出", childPrefix,prefix,childPrefix === prefix)
            if (childPrefix !== prefix) {
                return flag = false
            }
        })
        return flag
    }

    firstList.forEach((item,index) =>{
        const prefix = firstStr.slice(0,index+1)
        // console.log("输出", prefix)

        const flag = checkHasCommonPrefix(prefix,index)
        // console.log('flag',flag)
        if (!flag) return
        attr = prefix
    })

    return attr
};
