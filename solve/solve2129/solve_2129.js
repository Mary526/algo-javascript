/**
 * @index 2129
 * @title 可互换矩形的组数
 * @difficulty 中等
 * @tags 
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-pairs-of-interchangeable-rectangles/
 * @frontendId 2001
*/

/**
 * @param {number[][]} rectangles
 * @return {number}
 * @date 2021/9/12
 */
var interchangeableRectangles = function(rectangles) {
//     let counts = 0
    
//     for(let i = 0; i < rectangles.length ; i++) {
//         for(j = i + 1 ; j < rectangles.length ; j++) {
//             const flag = rectangles[i][0]*rectangles[j][1] === rectangles[i][1]*rectangles[j][0]
//             if (flag) {
//                 counts++
//             }
            
//         }
//     }
    
//     return counts
    
    let amap = new Map()
    
    for (let i = 0 ; i < rectangles.length ; i++) {
        const points = rectangles[i][0] / rectangles[i][1]
        if (!amap.has(points)) {
            amap.set(points,1)
        } else {
            amap.set(points, amap.get(points) + 1)
        }
    }
    
    // console.log("amap", amap)
    
    const factorial = (m,n) => {
        let num = 1 , count = 0
        
        for (let i = m; i > 0; i-- ) {
            if (count === n) {
                break
            }
            num = num*i
            count++
        }
        
        return num
    }
    
    const combination = (m,n) => {
        return factorial(m,n)/factorial(n,n)
    }
    // console.log("==combination", combination(4,2))
    
    const values = Array.from(amap.values())
    
    // console.log('values:', values)
    let counts = 0
    
    for(let j = 0;j < values.length ; j++) {
        if (values[j] > 1) {
            counts += combination(values[j],2)
        }
        
    }
    
    return counts
};
