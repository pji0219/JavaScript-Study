// 호이스팅(Hoisting)
// 함수 선언부가 유효 범위 최상단으로 끌어 올려지는 현상
// 그래서 함수 호출을 위에서 하고 선언을 아래에 해도 실행이 됨

const a = 7;

double();

function double() {
  console.log(a * 2);
}
