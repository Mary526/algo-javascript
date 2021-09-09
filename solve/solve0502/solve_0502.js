/**
 * @index 502
 * @title IPO
 * @difficulty 困难
 * @tags greedy,array,sorting,heap-priority-queue
 * @draft false
 * @link https://leetcode-cn.com/problems/ipo/
 * @frontendId 502
*/

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 * @date 2021/9/9
 */
var findMaximizedCapital = function(k, w, profits, capital) {
// 先按照成本进行排序
    let profitsCapitalSort = capital.map((item,index) => { 
        return [item,profits[index]]
    }).sort((a,b)=> a[0] - b[0] ) 
 
    let cur = 0
    // 换成队列来做就快很多，
    // 用了队列，就不需要自己再排序
    // let array = []
    let pq = new MaxPriorityQueue() 

    for (j = 0;j < k;j++) {
        for(let i = cur;i < profitsCapitalSort.length;i++) { 
            if (profitsCapitalSort[i][0] > w) break
            cur++
            // array.push(profitsCapitalSort[i])
            pq.enqueue(profitsCapitalSort[i][1],profitsCapitalSort[i][1])
 
        } 

        // array = array.sort((a,b)=> a[1] - b[1])
        // if (array.length === 0) return w
        if (pq.size() === 0) return w
        // w += array[array.length - 1][1] 
        // array.pop() 
        w += pq.front().element
        pq.dequeue()
    }
    
    return w
};
