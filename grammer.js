const a = 'world!';

console.log('hello,' + ` ${a}`);


// 조건문
const n = 11;

if (n > 10) {
    console.log("n이 10보다 크다");
} else if (n > 7) {
    console.log("n이 7보다 크다");
} else {
    console.log("둘다 아니다.");
}

// 코드가 한줄이면 중괄호 생략 후 한줄로 가능
if (n > 10) console.log("n이 10보다 크다"); else if (n > 7) console.log("n이 7보다 크다");  else  console.log("둘다 아니다.");

// 삼항 연산자
// 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
let n2 =5;

const message = console.log(n2 % 5 == 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.');
console.log(message);

// switch / case문

const goods = '맥북'

switch(goods) {
    case '아이폰': {
        console.log("아이폰이다!");
        break;
    }
    case '맥북': {
        console.log("맥북이다!");
        break;
    }
    default: {
        console.log("뭔지 모르겠다...")
    }
  
}

// 반복문

// 보통 어떤 유한한 횟수만큼 반복할 때는 for문을 사용한다.
for (let i = 0; i< 5; i++) {
    console.log("김소현 화이팅!");
}

let num = 0;

while (num<5) {
    console.log("우주 존예 김소현!");
    num++;
}

let num1 = 0;

do {
    console.log("김소현은 예쁘다!");
    num1++
} while(num1 < 5);

// for of : 배열을 반복시킬 때 사용
for (const i of [1, 2, 3]) {
    console.log(i);
}

// for in : 객체를 반복 시킬 때 사용
for (const i in {a:1, b:2, c:3}) {
    console.log(i);
}




// 함수
function hello (a) {
    return "hello";
}

console.log(hello());

const hello2 = (a) => {
    return "hello2"
}

console.log(hello2());


// 클래스

