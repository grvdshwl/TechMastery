// Online Stock Span

var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1;
  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    const [prevPrice, prevSpan] = this.stack.pop();
    span += prevSpan;
  }
  this.stack.push([price, span]);

  return this.stack[this.stack.length - 1][1];
};
