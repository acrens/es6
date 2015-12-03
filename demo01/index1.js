/**
 * let命令使用
 */
(function() {
    'use strict';

    // let命令作用范围
    for (var i = 0; i < 6; i++) {}
    console.log(i);

    for (let j = 0; j < 6; j++) {
        console.log('j:' + j);
    }
    // console.log(j);

    // 不存在变量提升
    console.log(temp1);
    var temp1 = 'hello world 1';

    // console.log(temp2);
    let temp = 'hello world 2';

    // 暂时性死区
    var tmp = 'i love you';
    if (true) {
        tmp = 123;
        let tmp;
    }

    // 不允许重复申明变量
    function tmp1() {
        var a = 1;
        let a = 2;
    }

    function tmp2() {
        let a = 1;
        let a = 2;
    }
})();
