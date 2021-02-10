/* 
    1. Use strict
    added in ES 5
    use this for Valina JavaScript.
*/

'use strict';

// 2. Variable
// let (added in ES6)

let name = 'park';
console.log(name);
name = 'kim';
console.log(name);

// var (더 이상 쓰면 안됨)
// var hoisting (선언을 아래에서 위로 올려줌)
console.log(age);
age = 4;
console.log(age);
var age;
// var는 블록 스코프가 없다
{
    age1 = 5;
    var age1;
}
console.log(age1);

// number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (최근에 추가된 타입, 아직 사용을 잘 안한다.)
const bigInt = 123456789012345678901234567890n; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 똑같게 만들고 싶다면 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

console.log(`value: ${symbol1.description} type: ${typeof symbol1}`);

// 동적 타입 언어
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
