/**
 * @index 1014
 * @title 最接近原点的 K 个点
 * @difficulty 中等
 * @tags geometry,array,math,divide-and-conquer,quickselect,sorting,heap-priority-queue
 * @draft false
 * @link https://leetcode-cn.com/problems/k-closest-points-to-origin/
 * @frontendId 973
*/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 * @date 2021/12/17
 */
var kClosest = function(points, k) {
let ans = []
    for(let i = 0 ; i < points.length ; i++) {
        const temp = Math.pow(points[i][0],2)+Math.pow(points[i][1],2)
        ans.push([points[i],temp])
    }
    ans.sort((a,b)=>a[1]-b[1])
    // console.log(ans)
    return ans.slice(0,k).map(item=>item[0])
};
