/**
 * @index 575
 * @title 分糖果
 * @difficulty 简单
 * @tags array,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/distribute-candies/
 * @frontendId 575
*/

/**
 * @param {number[]} candyType
 * @return {number}
 * @date 2021/11/1
 */
var distributeCandies = function(candyType) {
let n = candies.length / 2 , amap = new Map() , array = []

    for(let i = 0; i < candies.length ;i++) {
        if (!amap.has(candies[i])) {
            amap.set(candies[i],1)
        } else {
            amap.set(candies[i],amap.get(candies[i])+1)
        }
    }

    // console.log('amap:', amap)

    for(const [keys,values] of amap) {
        // console.log("keys:",keys)
        array.push([keys,values])
    }

    array = array.sort((a,b)=>{return b[1] - a[1]})

    // console.log("1:", array)

    for(let j = 0;j < array.length ;j++) {
        const counts = array[j][1]
        // console.log("counts", counts,',n:',n)
        if (n === 0) {
            // console.log("array1:", array)
            return array.filter(item=>item[1] !== 0).length
        } else {
            if (counts === 1) {
                n--
                array[j][1] = 0
            } else if (counts > 1 && (counts - 1) <= n) {
                n = n - (counts - 1)
                array[j][1] = 1
            } else if ((counts - 1) > n) {
                n = 0
                array[j][1] = counts - n
            }
        }

    }
    // console.log("array2:", array)
    return array.filter(item=>item[1] !== 0).length
};
