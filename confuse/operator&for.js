// string concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 
'''''
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // 덧셈
console.log(1 - 1); // 뺄셈
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱셉
console.log(5 % 2); // 나머지
console.log(2 ** 3); // 제곱

// 3. Increment and decrement operators

// 선 증가
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIcrement: ${preIncrement}, counter: ${counter}`);

// 후 증가
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIcrement: ${postIncrement}, counter: ${counter}`);

// 마이너스도 원리 같음

// 4. 논리 연산자: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('1');
    }
    return true;
}

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('1');
    }
    return true;
}

// !(not) : 반대로 해줌 (예: false -> true)
console.log(!value1);

// object equality by reference
const park1 = { name: 'park' };
const park2 = { name: 'park' };
const park3 = park1;

console.log(park1 == park2); // f
console.log(park1 === park2); // f
console.log(park1 === park3); // t

// equality - puzzler
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f


// loops

// while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while: 먼저 코드 실행 후 조건 체크
do {
    console.log(`do while: ${i}`)
    i--;
} while (i > 0);

for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

