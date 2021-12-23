/**
 * @index 51
 * @title N 皇后
 * @difficulty 困难
 * @tags array,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/n-queens/
 * @frontendId 51
*/

/**
 * @param {number} n
 * @return {string[][]}
 * @date 2021/12/23
 */
var solveNQueens = function(n) {



    let ans = []


    // index 为每一横 ； depth 为每一纵
    const dfs = (index , depth, list) => {
        // console.log(index, depth, list,'，区间：',[Math.max(0,index-1),Math.min(n-1 , index+1)])
        let temp = list.slice()


        if(depth === n - 1) {
            // console.log("temp===", temp)
            // 处理list为特殊格式
            const array = temp.map(item => {
                let tempArray = Array(n).fill('.')
                tempArray[item] = 'Q'
                return tempArray.join("")
            })
            
            return ans.push(array)
        }
        

        // temp[index] = index 

        for(let j = 0 ; j < n ; j++) {
            if (j >= Math.max(0,index-1) && j <= Math.min(n-1 , index+1)) continue
            // if(list.indexOf(j) >= 0) continue
            // 和过往的数据不能在同一列，同一斜行
            let flag = false
            for(let k = 0; k < temp.length ; k++) {
                // 有数据在一列，过滤掉
                if(temp[k] === j) {
                    flag = true
                } 
                // 两个节点在斜线上 || 只要两个点横纵坐标相加结果相等或者相减结果相等，就可以判断两个点在同一斜线上
                if((k - temp[k] === depth+1 - j) || (k + temp[k] === depth+1 + j)) {
                    // console.log("status:", [k,temp[k]])
                    flag = true
                }   

                // 有个在顶点
                // if(index === 0 && temp[index] === 0 && j === depth + 1) return flag = true
                // if(i > 0 && j%i === 0 && )
            }
            if(flag) continue
            
            // console.log("===j", j)
            // temp.push(j)
            // console.log("=====???", )
            temp[depth+1] = j
            const val = j
            dfs(val , depth+1 , temp)
        }

    }

    // 按列来遍历
    for(let i = 0 ; i < n ; i++) {
        let qTempArray = Array(n)
        qTempArray[0] = i

        dfs(i , 0 , qTempArray)

    }

    // todo 处理成..Q.格式
    return ans
};
