// HTML과 JavaScript 연동
// DOM: 각 태그에 대한 정보를 지니고 있는 자바스크립트 객체
// 카운터 만들기

// HTML에 있는 태그를 DOM에 설정
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// DOM 이벤트 설정
increase.onclick = () => {
    const current = parseInt(number.innerText, 10) // parseInt: 문자열을 숫자로 변환해주는 것, 맨 뒤의 숫자는 10진수
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10)
    number.innerText = current - 1;
}




