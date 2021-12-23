/**
 * @index 801
 * @title 判断二分图
 * @difficulty 中等
 * @tags depth-first-search,breadth-first-search,union-find,graph
 * @draft false
 * @link https://leetcode-cn.com/problems/is-graph-bipartite/
 * @frontendId 785
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 * @date 2021/12/24
 */
var isBipartite = function(graph) {
let n = graph.length , color = new Array(n).fill(0) , flag = true


    const dfs = (u , c) => {
        color[u] = c
        for(let v = 0; v < graph[u].length ; v++) {
            // console.log("v",graph[u][v],c)
            if(color[graph[u][v]] === c) {
                flag = false
                return
            }
            if(color[graph[u][v]] === 0) {
                dfs(graph[u][v],-c)
            }
        } 
    }

    // console.log(color)
    for(let i = 0 ; i < n ; i++) {
        if (color[i] === 0) {
            dfs(i,1)
        }
    }
    return flag 
};
