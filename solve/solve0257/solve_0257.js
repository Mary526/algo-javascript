/**
 * @index 257
 * @title 二叉树的所有路径
 * @difficulty 简单
 * @tags tree,depth-first-search,string,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-paths/
 * @frontendId 257
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
 * @return {string[]}
 * @date 2021/12/16
 */
var binaryTreePaths = function(root) {
	let ans = []

    const dfs = (node,list) => {
        // console.log("node:",node,node.left,node.right)
        if(node.left === null && node.right === null){
          const temp = list.slice()
          temp.push(node.val)
          return  ans.push(temp.join("->"))
        }
        let tempList = list.slice()
        tempList.push(node.val)

        // console.log("tempList",tempList)

        node.left && dfs(node.left,tempList)    
        node.right && dfs(node.right,tempList)
    }

    dfs(root,[])

    return ans   
};
