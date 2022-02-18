/**
 * @index 1916
 * @title 找出星型图的中心节点
 * @difficulty 简单
 * @tags graph
 * @draft false
 * @link https://leetcode-cn.com/problems/find-center-of-star-graph/
 * @frontendId 1791
*/

/**
 * @param {number[][]} edges
 * @return {number}
 * @date 2022/2/18
 */
var findCenter = function(edges) {
let center = null
    if(edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
        center = edges[0][0]
    } else if(edges[0][1] === edges[1][0] || edges[0][1] === edges[1][1]) {
        center = edges[0][1]
    }  
    return center
};
