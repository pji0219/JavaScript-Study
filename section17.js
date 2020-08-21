// scope : 변수 또는 함수를 선언하게 될때  해당 변수 또는 함수가 어디서 어디까지 유효한지 대한 범위를 의미

// global scope: 코드 전역에 유효
const value = 'hello!';

function myFunction() {
    console.log('myFunction: ');
    console.log(value);
}

// funtion scope: 함수 내에 유효
function otherFunction() {
    console.log('otherFuction: ');
    const value = 'bye!';
    console.log(value);
}

function myFunction2() {
    const value = 'bye!';
    const anotherValue = 'world';
    function functionInside() {
        console.log('fuctionInside: ');
        console.log(value);
        console.log(anotherValue);
    }
    functionInside();
}

// block scope: 블록 내에서 유효
function myFunction3() {
    const value = '김소현';
    if (true) {
        const value = '김채연';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('fuction scope: ');
    console.log(value);
}

myFunction();
otherFunction();
myFunction2();
myFunction3();
console.log('global scope: ');
console.log(value);