/**
 * @index 1723
 * @title 最多可达成的换楼请求数目
 * @difficulty 困难
 * @tags bit-manipulation,array,backtracking,enumeration
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/
 * @frontendId 1601
*/

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 @ @date 2022/2/28
 */
var maximumRequests = function(n, requests) {
const delta = new Array(n).fill(0);
    let zero = n, ans = 0, cnt = 0;
    const dfs = (requests, pos) => {
        if (pos === requests.length) {
            if (zero === n) {
                ans = Math.max(ans, cnt);
            }
            return;
        }

        // 不选 requests[pos]
        dfs(requests, pos + 1);

        // 选 requests[pos]
        let z = zero;
        ++cnt;
        const r = requests[pos];
        let x = r[0], y = r[1];
        zero -= delta[x] == 0 ? 1 : 0;
        --delta[x];
        zero += delta[x] == 0 ? 1 : 0;
        zero -= delta[y] == 0 ? 1 : 0;
        ++delta[y];
        zero += delta[y] == 0 ? 1 : 0;
        dfs(requests, pos + 1);
        --delta[y];
        ++delta[x];
        --cnt;
        zero = z;
    }
    dfs(requests, 0);
    return ans;
};
