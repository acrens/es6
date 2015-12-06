'use strict';

/*
 * 面向对象写js
 */
{
	console.log(typeof Point);

    // let point = Point(2, 5); error
    let point = new Point(2, 5);
    console.log(point.toString());
    console.log(point.toValue());
    console.log(point.hasOwnProperty('x')); // true
    console.log(point.hasOwnProperty('toString')); // false
    console.log(point.__proto__.hasOwnProperty('toString')); // true

    point.__proto__.printName = function() {
    	return Point.name;
    }
    let point1 = new Point(1, 2);
    // console.log(Point.printName()); error
    console.log(point1.printName());

    // ColorPoint
    var cp1 = new ColorPoint(2, 4, 'red');
    console.log(cp1.toString());
    // console.log(cp1.staticPrint()); error, because static method is class method
    console.log(ColorPoint.staticPrint());
    ColorPoint.staticattr = 1;
    console.log(cp1.staticattr);
    console.log(ColorPoint.staticattr);
}
