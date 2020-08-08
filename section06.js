// 객체

const dog = {
    name: '멍멍이', // name(key) : '멍멍이'(value)
    age: 2
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: 'zmfltm 에반스',
    alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);


// 비구조화 할당
const {name} = ironMan;
console.log(name);

function print({alias, name, actor}) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);


// 객체 안에 함수 넣기

const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function say() { // function say() 생략하고 say()라고 해도 됨
        console.log(this.sound); // this: 함수가 위치한 객체 자기 자신

    }
};


// Getter와 Setter함수

// Getter 함수
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numbers.sum);


// setter 함수

const dog = {
    _name: '멍멍이',
    set name(value) {
        console.log('이름이 바뀝니다..' + value);
    }
};

dog.name = '뭉뭉이';
console.log(dog.name);


// 연습

const numbers1 = {
    _a: 1,
    _b: 2,
    _sum:3,
    calculate() {
        console.log('calculate');
        this._sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

numbers1.a = 5;
numbers1.b = 7;

console.log(numbers1.sum);

const numbers3 = [10, 20, 30, 40, 50];

const doggy = {
    name0: '야옹이',
    sound0: '냥',
    age: 1
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));