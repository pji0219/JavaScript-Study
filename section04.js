// 조건문

// if문 : 조건이 만족되면 {}안의 코드 실행
const a = 1;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}

// if~else문 : if문의 조건이 만족 되면 if문 아래 코드 실행하고 만족되지 않으면 else문 아래 코드 실행
const b = 10;
if (b > 15) {
  console.log('b 가 15 큽니다.');
} else {
  console.log('b 가 15보다 크지 않습니다.');
}

/* if~else if문: 여러 조건에 따라 다른 작업을 해야 될때 사용되며 if문의 조건이 만족되지 않으면
그 밑의 else if문의 조건을 검사하고 그것도 만족되지 않으면 그 아래를 검사하고 그런식으로 진행
하면서 조건이 만족되는 것을 만나게 되면 그 코드를 실행한다. */

const c = 10;
if (c === 5) {
  console.log('5입니다!');
} else if (c === 11) {
  console.log('11입니다!');
} else if (c === 7) {
  console.log('7입니다!');
} else if (c === 10){
  console.log('10입니다!');
} else {
  console.log.log('숫자가 아닙니다!');
}

// switch / case문 : 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용한다.

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}


