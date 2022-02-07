/**
 * initialize your data structure here.
 */
 var MinStack = function () {
    this.x_stack = [];
    // 最小栈  所以这里放的是正无穷大
    this.min_stack = [Infinity];
  };
  
  /**
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function (x) {
    this.x_stack.push(x);
    // 这个思路相当于每次添加元素的时候都往最小栈添加元素，
    // 但是往最小栈添加元素的时候不仅仅是添加x 而是添加x对应的最小元素
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function () {
    // 出栈的时候两个栈都出
    this.x_stack.pop();
    this.min_stack.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function () {
    return this.x_stack[this.x_stack.length - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1];
  };
  
  
//   链接：https://leetcode-cn.com/problems/min-stack/solution/liang-chong-si-lu-lai-shi-xian-zui-xiao-eaq6z/