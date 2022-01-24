/**
 * @index 2161
 * @title 股票价格波动
 * @difficulty 中等
 * @tags design,hash-table,data-stream,ordered-set,heap-priority-queue
 * @draft false
 * @link https://leetcode-cn.com/problems/stock-price-fluctuation/
 * @frontendId 2034
*/


var StockPrice = function() {
this.maxTime = 0
    this.timeMap = new Map()
    this.maxPrice = new PriorityQueue((a, b)=>a[0] - b[0] > 0)
    this.minPrice = new PriorityQueue((a, b)=>a[0] - b[0] < 0)
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
iStockPrice.prototype.update = function(timestamp, price) {
this.maxTime = Math.max(timestamp, this.maxTime)
    this.timeMap.set(timestamp, price)
    this.maxPrice.offer([price, timestamp])
    this.minPrice.offer([price, timestamp])
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
return this.timeMap.get(this.maxTime)
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
while(true){
        const cur = this.maxPrice.peek()
        if(this.timeMap.get(cur[1]) === cur[0])
            return cur[0]
        this.maxPrice.poll()
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
while(true){
        const cur = this.minPrice.peek()
        if(this.timeMap.get(cur[1]) === cur[0])
            return cur[0]
        this.minPrice.poll()
    }
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
