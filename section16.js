// spread와 rest

// spread 연산자 : 이 문법을 사용하면 객체나 배열을 펼칠 수 있다.
// 객체에서 사용
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime, // slime 객체의 속성을 복사
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green' // 뒤에 color를 green으로 했기에 green으로 덮어씀
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

// 배열에서 사용
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];

console.log(spreadNumbers);

// 함수의 인자에서 사용

function subtract(x, y) {
    return x - y;
};

const numbers2 = [1, 2];
const result = subtract(...numbers);
console.log(result);

// rest: 스프레이드와 반대 다른 객체에 있는걸 모아온다.

// 객체에서 사용
const redCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'red'
};

const {color, ...rest} = redCuteSlime;
// rest를 다른 이름으로도 설정 가능

console.log(color);
console.log(rest);

const {attribute, ...rest2} = rest;
console.log(rest2);

// 배열에서 사용
const numbers3 = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...rest3] = numbers3;

console.log(one);
console.log(two);
console.log(rest3);

// 함수에서 사용

function sum(...rest4) {
    return rest4.reduce((acc, current) => acc + current, 0);
};

console.log(sum(1,2,3,4,5,6,7,8));