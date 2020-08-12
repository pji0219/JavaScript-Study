// 배열 내장함수

// forEach : 배열을 반복할때 쓰는 내장함수

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지']

// forEach에 함수 넣어서 사용
superheroes.forEach(function(hero) {
    console.log(hero);
})

// 화살표 함수로 사용
superheroes.forEach(hero => {
    console.log(hero);
})

// map: 배열 안의 원소를 변환할 떄 사용

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = array.map(n => n*n);

console.log(squared);


const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

// 배열에 텍스트만 있게 하기
const texts = items.map(item => item.text);
console.log(texts);

// 원하는 항목이 어디 있는지 알려주는 함수

// 1. indexOf

const index = superheroes.indexOf('토르');
console.log(index);

// findIndex : 배열안의 객체를 찾을 때 사용
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index2 =  todos.findIndex(todo => todo.id === 3)
console.log(index2);

// find : 객체안에 들어 있는 함목 표시

const index3 =  todos.find(todo => todo.id === 3)
console.log(index3);

// filter : 특정 조건을 만족하는 원소들을 찾아서 그 원소들을 가지고 새로운 배열을 만드는 함수

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);

// splice : 배열에서 특정 항목을 제거할 때 사용한다.

const numbers = [10, 20, 30, 40];
const index4 = numbers.indexOf(30)
const spliced = numbers.splice(index4, 1);
console.log(spliced); // 지운 값
console.log(numbers);

// slice

const sliced = numbers.slice(0,2);
console.log(sliced);
console.log(numbers);

// shift : 첫번째 원소를 배열에서 추출

const numbers2 = [10, 20, 30, 40];

// 맨 뒷부분에 원소 추가
numbers2.push(8);
console.log(numbers2);



// pop : 마지막 원소를 배열에서 추출

const value2 = numbers2.pop();
console.log(value2);
console.log(numbers2);

// unshift : 맨 앞부분에 원소 추가

numbers2.unshift(5);
console.log(numbers2);

// shift : 첫번째 원소를 배열에서 추출

const numbers2 = [10, 20, 30, 40];

const value3 = numbers2.shift();

console.log(value);
console.log(numbers2);

// concat : 여러개의 배열을 하나로 합침, 기존의 배열을 건들지 않음 (그대로 보존)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated =  arr1.concat(arr2);
console.log(concated);

// 이렇게도 할 수 있다.

const concated2 = [...arr1, ...arr2];
console.log(concated2);

// join : 배열안에 있는 값들을 문자열 형태로 합칠때 사용

const array = [1, 2, 3, 4, 5];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));

// reduce : 배열안에 있는 값으로 연산해야 할때 사용

const num = [1, 2, 3, 4, 5];

// 이건 함수로 구현 했을때
let sum = 0;
num.forEach(n => {
    sum += n;
});

console.log(sum);

// reduce로 구현했을때
const sum2 = num.reduce((accumulator, current) => accmulator + current, 0);
// 0: 초기값, accmulator: 누적된 값을 의미, current: 배열의 원소(하나씩 들어감)
console.log(sum2);


alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];

const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;

}, {});

console.log(counts);
