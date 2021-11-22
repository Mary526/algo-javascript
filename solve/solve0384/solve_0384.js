/**
 * @index 384
 * @title 打乱数组
 * @difficulty 中等
 * @tags array,math,randomized
 * @draft false
 * @link https://leetcode-cn.com/problems/shuffle-an-array/
 * @frontendId 384
*/

/**
 * @param {number[]} nums
 * @date 2021/11/22
 */
var Solution = function(nums) {
	this.array = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
	return this.array
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	let vShuffle = JSON.parse(JSON.stringify(this.array))
    for(i = 1;i < vShuffle.length ;i++) {
        let r = parseInt(Math.random()*(i+1))
        // console.log("r:", r,'i',i)
        if (r !== i ) {
            const temp = vShuffle[r]
             vShuffle[r] = vShuffle[i]
             vShuffle[i] = temp
        }
    }
    return vShuffle
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
