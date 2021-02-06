/* 
    프로그램을 짤 때 반복적으로 실행해야되는 로직이 있다면 그것을 함수로 만들게 된다
    왜냐하면 재사용이 되기 때문이다.
*/

// 콜백 함수
function add(num1, num2) {
    return num1 + num2;
}

function callback1(callback) {
    const result = callback(2, 5);
    console.log(result);
}

callback1(add);


function callback2(callback) {
    const result = callback(2, 5);
    console.log(result);
}

callback2((a, b) => {
    return a + b;
});