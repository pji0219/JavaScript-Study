// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression
// 한번 쓰고 나서 더 이상 사용할 일이 없을 때 사용
// 호출 안해도 됨

const a = 7;

// 방법 1
(function () {
  console.log(a * 2);
})();

// 방법 2
(function () {
  console.log(a * 2);
}());

