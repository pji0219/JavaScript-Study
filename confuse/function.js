/*
    함수
    프로그램을 구성하는 기본적인 빌딩 블록
    서브 프로그램이라고도 불리며 여러번 재사용 가능
    한가지의 기능이나 어떠한 값을 계산하기 위해 쓰여짐

    자바스크립트에서 함수는 객체이다.(간주 되어 진다.)
    객체로 간주 되어 지기 때문에 변수에 할당 할 수도 있고, 파라미터로 전달이 되고,
    함수를 리턴할 수도 있게 되는 것이다.
*/

/* 
    파라미터 

    premitive parameters: 메모리에 value가 그대로 저장 되기 때문에 value가 전달이 된다.
    object parameters: 메모리에 참조 값이 저장 되기 때문에 reference가 전달 된다.
*/

// object parameter
function changeName(obj) {
    obj.name = 'programmer';
}

const park = { name: 'park' };
changeName(park);
console.log(park);


// default parameter (ES6): 파라미터에 인자가 전달 되지 않았을 경우에 기본값으로 전달할 것을 지정
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('hi!');


// Rest parameter(ES6): ...param 이런식으로 파라미터 앞에 ...을 쓰면 파라미터가 배열로 전달 된다.
function printAll(...args) {
    args.forEach(arg => console.log(arg));
}

printAll('park', 'jong', 'ik');


// local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // 글로벌 변수

function printMessage() {
    let message = 'hello';
    console.log(message); // 지역 변수
    console.log(globalMessage);

    function printAnother() {
        console.log(message); // 변수 message는 함수 내의 모든 함수에 영향을 미침
        let chidMessage = 'hello'; // 지역 변수
        console.log(chidMessage);
    }
    // console.log(chidMessage); error
    printAnother();

    // return undefined; 리턴이 생략된 함수는 undefined 이 들어가 있는 것과 똑같다.
}
// console.log(message); error

printMessage();


// return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// Early return, early exit
// 조건이 안 맞으면 바로 리턴 시켜서 함수를 종료 시켜버리는 것

// bad: 조건문 블록 안에 긴 코드를 쓰면 가독성이 떨어짐
function upgradeUser(user) {
    if (user.point > 10) {
        // 이하 긴 업그레이드 로직...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return
    }
    // 이하 긴 업그레이드 로직...
}


/*
    함수는 다른 변수 처럼 변수에 값을 할당할 수 있고
    다른 함수에 인자로 전달할 수 있으며
    다른 함수에 리턴 값으로도 리턴이 된다.
*/

/* 
    Function expression
    함수 정의 보다 함수 호출이 먼저 될 수 있다. (호이스팅)
    실행이 도달하면 함수 선언이 생성 된다.

*/

const print = function () { // 익명 함수
    console.log('print');
}

print();
const printAgain = print;
printAgain(); // print와 같음

// callback function using function expression
// 콜백함수: 함수를 파라미터로 전달 해줘서 콜백함수를 전달 받은 함수에 구현된 기능에 맞게 전달된 함수를 호출하는 함수
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
}

const printNo = function print() {
    console.log('no!');
}

randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

/* 
    named function
    디버깅할 때 함수 이름이 있으니 추척하기 더 좋다 
    재귀할 때도 사용할 수 있다. (함수 안에서 자기 자신을 다시 호출할 때)
*/
function print() {
    console.log('abc');
}


const simplePrint = () => console.log('simple!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // 여러줄의 코드....
    return a * b;
}


// IIFE: Immediately Invoked Function Expression
// ( 즉시 실행 함수 )
// 함수 선언과 동시에 즉시 호출 되는 함수
(function hello() {
    console.log('IIFE');
})();