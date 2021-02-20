/*
    Object
    one of the JavaScript's data types.
    a collection relacted data and/or functionality
    Nearly all objects in JavaScript are instances of Object
*/

const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const park = { name: 'park', age: 33 }; // 키 + 밸류 = 속성 , key + value = property 즉 키와 밸류를 통틀어서 속성이라고 부른다.
print(park);

/* 
    동적인 타입의 언어

    자바스크립트는 런타임 때(프로그램이 동작하고 있을 때) 타입이 결정 되는 언어라서
    나중에 데이터를 넣을 수도 있다.
*/
park.hasJob = false;
console.log(park.hasJob);


// 2. 계산된 속성

// 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을 때 이 방법을 사용, 코딩할 때는 이것을 사용하면 된다.
console.log(park.name);

/* 계산된 속성, 이것을 사용할 때는 항상 키는 문자열로 해야됨 
    정확하게 어떤 키가 필요한지 모를 때, 즉 런타임에서 결정될 때
    원하는 키를 실시간으로 받아오고 싶을 때
*/
console.log(park['name']);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(park, 'name');

/* 3. Property value shorthand 
    속성 값 속기( 빠르게 쓰기 )
*/
const person = makePerson('park', 33);
console.log(person);

function makePerson(name, age) {
    // 키와 밸류의 이름이 동일하면 하나로 생략할 수 있다.
    return {
        name, // name: name,
        age // age: age
    }
}

// 4. Constructor Function (클래스가 없었을 때 사용하던 것)
// 이렇게 다른 계산은 하지 않고 순수하게 객체만 만들어 내는 함수는 앞 글자를 대문자 사용함

const person1 = new Person('kim', 23); // 함수를 호출할 때도 클래스에서 객체를 만들 때처럼 new 키워드 사용
console.log(person1);

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: 객체 안에 키가 존재하는지 확인 하는 연산자

console.log('name' in person1);

class Abc {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person2 = new Abc('park', 33);

console.log('name' in person2);


// 6. for..in vs for..of

// for (key in obj) : 객체 안에 있는 모든 키들을 순환함
const park1 = { name: 'jong ik', age: 33 }

for (key in park1) {
    console.log(key);
}

// for (value of iterable) : 이터러블한(반복 가능한) 객체를 순환함
// 배열은 대표적인 이터러블
const array = [1, 2, 3, 4];

for (value of array) {
    console.log(value);
}


/*
    cloning
    Object.assign(dest, [obj1, obj2, obj3...])
*/
const user1 = { name: 'park', age: '33' };
const user2 = user1;
user2.name = 'lee';

console.log(user1);

// old way
const user3 = {};
for (key in user1) {
    user3[key] = user1[key];
}

console.log(user3);

// Object: Object는 자바스크립트에 기본적으로 탑재 되있는 것으로 자바스크립트의 모든 객체의 최상위에 있으며 자바스크립트의 모든 객체는 Object를 상속 받는다.
// ver 1
const user4 = {};

Object.assign(user4, user1);
console.log(user4);

// ver 2
const user5 = Object.assign({}, user1);
console.log(user5);

// 뒤에 오는 것이 앞의 것을 덮어 씌움
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);
console.log(mixed.size);