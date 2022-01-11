/**
 * @index 872
 * @title 将数组拆分成斐波那契序列
 * @difficulty 中等
 * @tags string,backtracking
 * @draft false
 * @link https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/
 * @frontendId 842
*/

/**
 * @param {string} num
 * @return {number[]}
 * @date 2022/1/22
 */
var splitIntoFibonacci = function(num) {
    const list = [];
    backtrack(list, num, num.length, 0, 0, 0);
    return list;
};

const backtrack = (list, num, length, index, sum, prev) => {
    if (index === length) {
        return list.length >= 3;
    }
    let currLong = 0;
    for (let i = index; i < length; i++) {
        if (i > index && num[index] === '0') {
            break;
        }
        currLong = currLong * 10 + num[i].charCodeAt() - '0'.charCodeAt();
        if (currLong > Math.pow(2, 31) - 1) {
            break;
        }
        let curr = currLong;
        if (list.length >= 2) {
            if (curr < sum) {
                continue;
            } else if (curr > sum) {
                break;
            }
        }
        list.push(curr);
        if (backtrack(list, num, length, i + 1, prev + curr, curr)) {
            return true;
        } else {
            list.splice(list.length - 1, 1);
        }
    }
    return false;
}
