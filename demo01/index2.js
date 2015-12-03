/**
 * const命令使用场景-常量
 */
'use strict';

// 通过{}替换立即执行函数(function() {})();作为一个块级作用区域
{
    let tmp1 = 'hello world';
    console.log(tmp1);
}

/**
 * 1、如果在ES6中，输出I am outside;
 * 2、如果在ES5中，输出I am inside。
 * 如果要得到验证，可以去掉'use strict'试试
 */
function fun1() {
    console.log('I am outside');
}
(function() {

    if (false) {

        // ES6中由于块级作用域导致无法影响外部
        function fun1() {
            console.log('I am inside');
        }
    }

    fun1();
})();

/**
 * const其实和java中定义常量关键字const类似
 */
// const MIN;	// 报错
const PI = 3.1415; // 常量需要定义时就初始化
// PI = 5;	// 常量定义之后不能被修改

// 常量和C++指针类似，是指向地址
const ARR1 = {};
ARR1.name = 'acrens';
console.log(ARR1.name);
// ARR1 = {};	// 报错，赋值常量一个新对象导致地址改变 

if (true) {
    const MAX = 100;
}
// console.log(MAX); // 报错，常量也具有块级作用域

/**
 * 如何定义跨模块的常量 review:有问题
 */
// import * as constants from './constants';
// console.log(constants.A); // 1
// console.log(constants.B);
