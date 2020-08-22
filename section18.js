// hoisting: 아직 선언되지 않은 함수 혹은 변수를 끌어 올려서 사용 할 수 있는 자바스크립트의 작동 방식을 의미
// hoisting은 유지 보수하는데 어려움을 주기 때문에 피해야한다.

myFunction();

function myFunction() {
    console.log('hello world!');        
}

console.log(number);

var number = 2; // let이나 const는 hoisting이 안 일어남