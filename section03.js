// 연산자

// ++, --

// ++ : 1증가, -- : 1감소
let a = 1;

console.log(a++); // 증가하기 전 값을 보여준 후 증가
console.log(++a); // 증가 시킨 후 출력

console.log(a--); // 감소 시키기 전 값을 보여준 후 감소 
console.log(--a); // 감소 시킨 후 출력

// 대입 연산자

let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);

// 논리 연산자

// NOT : 반대로 바꿔줌

const a = !true;
console.log(a);

const b = !false;
console.log(b);

// AND : 둘다 true여야 true

const a = true && true;
console.log(a);

// OR : 둘중 하나가 true라면 true, 둘다 false여야 false

let t = true || false;
t = false || true;
t = true || true;

// 비교 연산자

// 두 값이 일치하는지 확인
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);

// 두 값이 일치하지 않는지 확인

const value = 'a' !== 'b';
console.log(value);

// 크고 작음
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false;
