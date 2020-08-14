// 프로토 타입과 클래스

/* 객체 생성자: 함수를 통해서 새로운 객체를 만들고 
그리고 넣고 싶은 값 또는 함수를 구현 할수 있게 해준다
객체 생성자를 만들때는 앞글자를 대문자로 해줘야한다. */

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    }
}
// 객체 생성자를 사용해서 새로운 객체를 만들때는 new 키워드를 사용한다.
const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();


function Animal2(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}
// 프로토타입: 
Animal2.prototype.say = function() {
    console.log(this.sound);
}

const dog2 = new Animal2('개', '멍멍이', '멍멍');
const cat2 = new Animal2('고양이', '야옹이', '야옹');

dog2.say();
cat2.say();

// 객체 생성자 상속

function Animal3(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal3.prototype.say = function() {
    console.log(this.sound);
}

function Dog(name, sound) {
    Animal3.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal3.call(this, '고양이', name, sound);
}

Dog.prototype = Animal3.prototype;
Cat.prototype = Animal3.prototype;

dog.say();
cat.say();


// 클래스

class Animal4 {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound); // 자동으로 프로토타입으로 등록이 됨
    }
}

const dog4 = new Animal4('개', '멍멍이', '멍멍');
const cat4 = new Animal4('고양이', '야옹이', '야옹');

dog4.say();
cat4.say();

// 클래스 상속

class Animal5 {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

class Dog5  extends Animal5 {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat5 extends Animal5 {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog6 = new Dog5('멍멍이', '멍멍');
const cat6 = new Cat5('야옹이', '야옹');
const cat7 = new Cat5('야오오오오오옹이', '야오오오오오오옹');

dog6.say();
cat6.say();
cat7.say();


class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand);
    }
    print() {
        console.log(`${this.name} 을(를) 파는 음식점들:`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');

chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();
