/**
 * @index 380
 * @title O(1) 时间插入、删除和获取随机元素
 * @difficulty 中等
 * @tags design,array,hash-table,math,randomized
 * @draft false
 * @link https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 * @frontendId 380
 * @date 2021/12/6
*/


var RandomizedSet = function() {
	this.ans = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
	// 极值判断
    if(this.ans.length === 0) {
        this.ans.push(val)
        return true
    }
    let ansMap = new Map()
    for(let i = 0;i < this.ans.length ;i++) {
        if(!ansMap.has(this.ans[i])) {
            ansMap.set(this.ans[i],i)
        }
    }
    if(!ansMap.has(val)) {
        this.ans.push(val)
        return true
    } else {
        return false
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
	// 极值判断
    if(this.ans.length === 0) {
        return false
    }
    let ansMap = new Map()
    for(let i = 0;i < this.ans.length ;i++) {
        if(!ansMap.has(this.ans[i])) {
            ansMap.set(this.ans[i],i)
        }
    }
    if(!ansMap.has(val)) {
        return false
    } else {
        this.ans.splice(ansMap.get(val),1)
        return true
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
	const index = Math.floor(Math.random()*(this.ans.length))
    return this.ans[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
