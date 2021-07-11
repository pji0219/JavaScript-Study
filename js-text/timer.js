// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후에 함수 실행
// setInterval(함수, 시간) : 시간 간격 마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log('park!');
}, 3000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timer);
});

const timer2 = setInterval(() => {
  console.log('jong-ik!');
}, 3000);

const h1El2 = document.querySelector('.wr');
h1El2.addEventListener('click', () => {
  clearInterval(timer2);
});