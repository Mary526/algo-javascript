/**
 * @index 278
 * @title 第一个错误的版本
 * @difficulty 简单
 * @tags binary-search,interactive
 * @draft false
 * @link https://leetcode-cn.com/problems/first-bad-version/
 * @frontendId 278
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * @date 2021/11/8
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0 , right = n
        while (left <= right) {
            let mid = left + Math.floor((right - left)/2)
            const flag = isBadVersion(mid)
            if (flag) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return left
    };
};
