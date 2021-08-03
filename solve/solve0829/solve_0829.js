/**
 * @index 829
 * @title 子域名访问计数
 * @difficulty 简单
 * @tags array,hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/subdomain-visit-count/
 * @frontendId 811
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 * @date 2021/8/3
 */
var subdomainVisits = function(cpdomains) {
if(cpdomains.length < 1) return []
    let websiteMap = new Map()

    for(i = 0; i < cpdomains.length ; i++) {
        const item = cpdomains[i].split(" ")
        const counts = item[0]
        const domain = item[1].split(".")
        // console.log("item:", item, ',counts:', counts, ',domain:', domain)
        for (j= domain.length;j--;j>0) {
            const domainItem = domain.slice(j,domain.length).join(".")
            // console.log('j:', j,',domainItem:', domainItem, ',websiteMap:',websiteMap)
            if (!websiteMap.has(domainItem)) {
                websiteMap.set(domainItem,counts)
            } else {
                websiteMap.set(domainItem, parseInt(counts) + parseInt(websiteMap.get(domainItem)))
            }
        } 
    }

    // console.log('websiteMap:',websiteMap)
    let array = []
    for([key,value] of websiteMap.entries()) {
        array.push(`${value} ${key}`)
    }

    // console.log("array:", array)
    return array
};
