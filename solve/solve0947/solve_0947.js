/**
 * @index 947
 * @title 在线选举
 * @difficulty 中等
 * @tags design,array,hash-table,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/online-election/
 * @frontendId 911
*/

/**
 * @param {number[]} persons
 * @param {number[]} times
 * @date 2021/12/11
 */
var TopVotedCandidate = function(persons, times) {
	this.persons = persons.slice()
    this.times = times.slice()

    let timesMap = new Map() 
    
    for(let i = 0;i < this.times.length;i++) {

        let personsMap = new Map() 
        for(let j = 0; j <= i ;j++) {
            if (!personsMap.has(this.persons[j])) {
                personsMap.set(this.persons[j],1)
            } else {
                personsMap.set(this.persons[j],personsMap.get(this.persons[j]) + 1)
            }
        }
        timesMap.set(this.times[i],personsMap)

       
    }
    this.timesMap = timesMap
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
	// console.log(this.persons, this.times)
    // let timesMap = new Map() 

    // for(let i = 0;i < this.times.length;i++) {

    //     let personsMap = new Map() 
    //     for(let j = 0; j <= i ;j++) {
    //         if (!personsMap.has(this.persons[j])) {
    //             personsMap.set(this.persons[j],1)
    //         } else {
    //             personsMap.set(this.persons[j],personsMap.get(this.persons[j]) + 1)
    //         }
    //     }
    //     timesMap.set(this.times[i],personsMap)

       
    // }

    // console.log('timesMap', timesMap)

     let l = 0 , r = this.times.length - 1
        while(l < r) {
            const mid = l + Math.floor((r - l)/2)
            if(this.times[mid] < t) {
                l = mid + 1
            } else {
                r = mid
            }
        }
        const tempL = t < this.times[l] ? l - 1: l
        // console.log("target:",tempL,t)

        const personsTemp = this.timesMap.get(this.times[tempL])
        // console.log('this.times[l]',this.times[l])
        let max = -Infinity , personAns = null , ans = []
        // console.log("personTemp:", personsTemp)
        for([key,value] of personsTemp) {
            if(value < max) continue
            max = value
            personAns = key
        }
        for([key,value] of personsTemp) {
            if(value !== max) continue
            ans.push(key)
        }
        if(ans.length <= 1) return personAns
 
        // console.log("==ans",ans)
        // 在平局的情况下，最近获得投票的候选人将会获胜
        // 这里要好好考虑一下，体现公平性
        // if(personsTemp.get(this.persons[tempL]) === max ) {
        //     personAns = this.persons[tempL]
        // }

        for(let k = tempL; k>=0 ;k--) {
            if(ans.indexOf(this.persons[k])>= 0) {
                return this.persons[k]
            }
        }
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
