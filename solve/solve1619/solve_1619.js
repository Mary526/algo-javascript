/**
 * @index 1619
 * @title 判断路径是否相交
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/path-crossing/
 * @frontendId 1496
*/

/**
 * @param {string} path
 * @return {boolean}
 * @date 2021/8/30
 */
var isPathCrossing = function(path) {
let amap = new Map()
    let x = 0 , y = 0
    amap.set(`${x}${y}`,1)

    let pathList = path.split("")

    // 根据指令，获取坐标
    const getPoint = (letter) => {
        switch (letter) {
            case 'N':
                y++
                break
            case 'S':
                y--
                break
            case 'E':
                x++
                break
            case 'W':
                x--
                break
            default:
                break
        }
        return `${x}${y}`
    }

    for (i = 0 ; i < pathList.length ; i++) {
        const temp = getPoint(pathList[i])
        // console.log("i", i,',amap.has(temp):', amap.has(temp),amap)
        if (amap.has(temp)) return true
        amap.set(temp,1)
    }
    // console.log('amap:', amap)
    return false
};
