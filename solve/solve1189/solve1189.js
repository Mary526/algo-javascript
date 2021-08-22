/**
 * @param {string} text
 * @return {number}
 * @date 2021/8/23 
 */
var maxNumberOfBalloons = function(text) {
    let amap = new Map()
    for(i=text.length-1;i>=0;i--) {
        if ('balloon'.includes(text[i])) {
            if (!amap.has(text[i])) {
                amap.set(text[i],1)
            } else {
                amap.set(text[i], amap.get(text[i])+1)
            }
        }
    }

    // console.log("===", amap) 
    if (amap.size !== 5) return 0
    const counts = Math.min(amap.get('b'),amap.get('a'),Math.floor(amap.get('l')/2),Math.floor(amap.get('o')/2),amap.get('n'))
    // console.log('counts:', counts)
    return  counts
};
