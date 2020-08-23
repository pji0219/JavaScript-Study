// 비동기 처리의 이해 : 여러 코드를 동시에 처리 하는 것

function work() {
    setTimeout(() => { // setTimeout 함수: 비동기 처리할때 쓰는 함수
        const start = Date.now(); // Date.now 현재 날짜를 숫자로 알려주는 자바스크립트 내장 함수
        for (let i = 0; i <1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
    }, 0) // 맨 뒤에 0 코드가 실행 되는 시간 0ms, 사실상 브라우저에서 최소 단위가 4ms라서 4ms부터 시작
}

// work 함수가 실행 되는 도중에 같이 작업됨
console.log('작업 시작!');
work();
console.log('다음 작업');

// 만약에 work 함수가 끝난다음 작업 하고 싶다면

function work2(callback) {
    setTimeout(() => {
        const start = Date.now(); 
        for (let i = 0; i <1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start)
    }, 0) 
}


console.log('작업 시작!');
work2((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms +'ms 걸렸다고 해요.');
});
console.log('다음 작업');

