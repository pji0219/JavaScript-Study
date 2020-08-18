/* 함수의 기본 파라미터: 함수를 호출할때 원래 넣었어야할 파라미터를 넣지 않았을때
기본 값으로 사용할것을 지정하는 것을 의미 */

function calculateCircleArea(r = 1) {// = 1 이렇게 써주면 기본파라미터로 1이 지정
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area);


const calculateCircleArea2 = (r = 1) =>  Math.PI * r * r;

const area2 = calculateCircleArea2();
console.log(area2);