'use strict';

// let p1 = new Point(); 无变量提升error
 
/**
 * 定义Point模型类
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '[' + this.x + '----' + this.y + ']';
    }
}

/**
 * [assign 一次性可以添加多个Point类的方法]
 * @param  {[type]} [Point原型]
 * @param  {[type]} [扩展属性]
 * @return {[type]} [null]
 */
Object.assign(Point.prototype, {
    toValue() {
        if (typeof this.x == "number" && typeof this.y == "number") {
            return this.x * this.y;
        } else {
            return "attr x and y no number..."
        }
    }
});
