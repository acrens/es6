'use strict';

/**
 * 继承Point类
 */
class ColorPoint extends Point {
	// static staticattr : 1; error
	// attr: 1, error
	constructor(x, y, color) {
		// this.color = color; error, because super not before
		super(x, y);
		this.color = color;
	}
	toString() {
		return this.x + '---' + this.y + '---' + this.color;
	}
	static staticPrint() {
		return 'I love static method...'
	}
}

// 注意：类里面只能定义静态方法，不能直接在类里面定义静态属性