// 1. DOM 연결
const btn = document.querySelector('button');
const list = document.querySelector('.list');
const input = document.querySelector('input');

// 2. 이벤트 리스너 생성
btn.addEventListener('click', button);

// 3. 리스너 두번째 파라미터 함수 만들기
function button(event) {
    event.preventDefault();
    const create = document.createElement('li');
    create.innerHTML = input.value;
    list.appendChild(create);
}