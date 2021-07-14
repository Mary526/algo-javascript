/**
 * @index 242
 * @title 有效的字母异位词
 * @difficulty 简单
 * @tags hash-table,string,sorting
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-anagram/
 * @frontendId 242
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @date 2021/7/14
 */
var isAnagram = function(s, t) {
    // const amap = new Map([["A",1],["B",2],["C",3],["D",4],["E",5],["F",6],["G",7],["H",8],["I",9],["J",10],["K",11],["L",12],["M",13],["N",14],["O",15],["P",16],["Q",17],["R",18],["S",19],["T",20],["U",21],["V",22],["W",23],["X",24],["Y",25],["Z",26]])

    // const sList = s.toLocaleUpperCase().split("").map(item=>{
    //     return amap.get(item)
    // })
    // const tList = t.toLocaleUpperCase().split("").map(item=>{
    //     return amap.get(item)
    // })
    // const bubbleSort = (list) => {
    //     for(i=0;i<list.length - 1;i++) {
    //         for(j=0;j<list.length - 1 - i; j++) {
    //             const temp = list[j]
    //             if (list[j] > list[j+1]) {
    //                 list[j] = list[j+1]
    //                 list[j+1] = temp
    //             }
    //         }
    //     }
    //     return list
    // }
    // const list1 = bubbleSort(sList)
    // const list2 = bubbleSort(tList)
    // if (list1.join("") === list2.join("")) return true
    // return false

    const countLetter = (list) => {
        if (!list || list.length < 1) return []
        let amap = new Map()
        for (i=0;i<list.length;i++) {
            // console.log("当前item", list[i])
            if(amap.has(list[i])) {
                amap.set(list[i],amap.get(list[i])+1)
            } else {
                amap.set(list[i],1)
            }
        }
        // console.log('amap:', amap)
        return amap
    }

    let map1 = countLetter(s.split(""))
    let map2 = countLetter(t.split(""))

    const compareMaps = (map1,map2) => {
        var testVal;
        if (map1.size !== map2.size) {
            return false;
        }
        for (var [key, val] of map1) {
            testVal = map2.get(key);
            // in cases of an undefined value, make sure the key
            // actually exists on the object so there are no false positives
            if (testVal !== val || (testVal === undefined && !map2.has(key))) {
                return false;
            }
        }
        return true;
    }
    // console.log('map1', map1)
    // console.log('map2', map2)

    const flag = compareMaps(map1,map2)

    //  console.log('---flag', flag)
    return  flag
};
