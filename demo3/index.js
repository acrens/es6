'use strict';

{
    console.log("\u{20BB7}"); // 𠮷
    console.log("\u{41}\u{42}\u{43}"); // ABC
    console.log('\u{1F680}' === '\uD83D\uDE80'); // true

    let hello = 123;
    console.log(hell\u{6F}); // 123

    let c = '𠮷';
    console.log(c.length);
    console.log(c.charCodeAt(0));
    console.log(c.charCodeAt(1));

    let c1 = '𠮷a';
    console.log(c1.length);
    console.log(c1.codePointAt(0).toString(16));
    // console.log(c1.codePointAt(1));
    console.log(c1.charCodeAt(2).toString(16));

    // 判断一个字符是由两个字节组成还是四字节
    function is32Bit(c) {
    	return c.codePointAt(0) > 0xFFFF;
	}
	console.log(is32Bit('程'));	// false 两字节
	console.log(is32Bit('𠮷')); // true 四字节

	// String.fromCharCode() 识别码点转字符-无法识别32为UTF-16
	console.log(String.fromCodePoint(0x20BB7)); // ES6
	console.log(String.fromCharCode(0x20BB7)); // ES5

	// 字符串遍历
	for (let c of 'acrens') {
		console.log(c)
	}

	var text = String.fromCodePoint(0x20BB7);

	// ES5 无法识别32位字符
	for (let i = 0; i < text.length; i++) {
		console.log(text[i]);
	}

	// ES6 能够识别32位字符
	for (let i of text) {
		console.log(i);
	}

	// at VS charAt
	// console.log('abc'.at(0));
	// console.log('𠮷'.at(0));
	
	
}
