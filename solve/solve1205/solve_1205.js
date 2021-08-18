/**
 * @index 1205
 * @title IP 地址无效化
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/defanging-an-ip-address/
 * @frontendId 1108
*/

/**
 * @param {string} address
 * @return {string}
 * @date 2021/8/18
 */
var defangIPaddr = function(address) {
return address.replace(/['.']/g,'[.]')  
};
