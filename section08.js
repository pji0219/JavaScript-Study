// 반복문

// for문
for (let i = 0; i < 10; i++) {
    console.log(i);
};

for (let i = 10; i>0; i--) {
    console.log(i);
};

const names= ['멍멍이', '야옹이', '멍뭉이'];
for 
(let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

// while문
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
};

let isfun = false;

while (!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isfun = true;
    };
};

// for ... of문 : 주로 배열에 사용

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
};

// for... in문
const doggy = {
    name: '야옹이',
    sound: '냥~',
    age: 1
};

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);

};

// continue, break

for (let i = 0; i < 10; i++) {
    if (i === 2) continue;
    console.log(i);
    if (i === 5) break;
};

// 반복문 연습

function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    };
    return sum;
};

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);