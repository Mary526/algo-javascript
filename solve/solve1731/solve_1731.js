/**
 * @index 1731
 * @title 奇偶树
 * @difficulty 中等
 * @tags tree,breadth-first-search,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/even-odd-tree/
 * @frontendId 1609
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @date 2021/12/26
 */
var isEvenOddTree = function(root) {
	let queue = [[root , 0 , null]]  , amap = new Map()
    while(queue.length) {
        const [node,depth] = queue.shift()
        if(!amap.has(depth)) {
            amap.set(depth,[node.val])
        } else {
            const temp = amap.get(depth)
            if(depth%2 === 0 && temp[temp.length - 1] >= node.val) { // 偶数层
                return false
            }else if(depth%2 !== 0 && temp[temp.length - 1] <= node.val) { // 奇数层
                return false
            } else {
                temp.push(node.val)
                amap.set(depth, temp)
            }
        }
        if(depth%2 === 0 && node.val%2 === 0) { // 偶数层
            return false
        }
        if(depth%2 !== 0 && node.val%2 !== 0) { // 奇数层
            return false
        }
        node.left && queue.push([node.left,depth+1])  
        node.right && queue.push([node.right,depth+1])
    }

    // console.log("====",amap)
    return true
};
