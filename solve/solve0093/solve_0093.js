/**
 * @index 93
 * @title 复原 IP 地址
 * @difficulty 中等
 * @tags string,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/restore-ip-addresses/
 * @frontendId 93
*/

/**
 * @param {string} s
 * @return {string[]}
 * @date 2021/12/21
 */
var restoreIpAddresses = function(s) {
	let ans = [] 

    const dfs = (index,start,list) =>{
        // 输出满足条件的IP
        if(index === 4) {
            // console.log("index",index,"start:", start,'list:',list)
            if(start === s.length) {
                // console.log("index",index,"start:", start,list)
                ans.push(list.slice().join("."))
            }
            return 
        }
        // 处理特殊情况-有前导0
        if(s[start] === '0') {
            const temp = list.slice()
            temp[index] = 0
           return dfs(index + 1, start + 1, temp)
        }

        // 一般情况
        for(let i = start ;i <= s.length ;i++) {
            const addr = s.slice(start,i)
            // console.log("addr:===", addr)
            // console.log("flag:" , addr === '0')

            // 字符串不大于'255' ， 同时大于0
            if(addr > 0 && addr <= 0xFF) {
                const temp = list.slice()
                temp[index] = addr
                const currentStart = i  
                dfs(index + 1, currentStart, temp)
            } 
        }
    }

    dfs(0,0,new Array(4))
    return ans
};
