// 콜백 함수
// 함수의 인자로 사용되는 함수

// 예시: setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('process...');
    // 실행 위치를 보장 하기 위해 주로 사용
    cb();
  }, 3000);
}
timeout(() => {
  console.log('Done!');
});