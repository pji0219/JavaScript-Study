// 클래스: 연관 있는 데이터들 끼리 종합적으로 묶여 있다.

class Person {
    constructor() {
        name; // 속성(필드)
        age;
    }
    speak() {

    } // 메서드(함수), 행동
}

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
           // throw Error('sdfsdfsdf');
        }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('ji', 'park', -1);
console.log(user1.age);


class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triagle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triagle = new Triagle(20, 20, 'red');
triagle.draw();
console.log(triagle.getArea());
