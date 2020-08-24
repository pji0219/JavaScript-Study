/* Promise: 비동기 작업을 보다 편리하게 할 수 있도록 ES6에 도입된 문법
예전에는 비동기 작업이 끝난 후 어떤 작업을 처리해야한다 지정할때
콜백함수로 처리했어야 됬었는데 비동기 작업을 해야될 코드가 많아질 경우에는
코드가 난잡해졌는데 promise 사용하므로써 코드를 편리하고 간결하게 쓸 수 있다*/

/* promise는 성공할 수도 있고 실패할 수도 있는데 성공할때는 resolve로 호출해주면 되고
실패할때는 reject로 호출해주면 된다. */

// 1초 뒤에 성공하는 promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result');
    }, 1000)
});

// then: promise가 끝나고 할 작업 설정
myPromise.then(result => {
    console.log(result);
})


// 1초 뒤에 실패하는 promise
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error());
    }, 1000)
});


myPromise2.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})


// Promise를 만드는 함수 제작

function increasseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increasseAndPrint(0).then(n => {
    return increasseAndPrint(n);
}).then(n => {
    return increasseAndPrint(n);
}).then(n => {
    return increasseAndPrint(n);
}).then(n => {
    return increasseAndPrint(n);
}).then(n => {
    return increasseAndPrint(n);
}).catch(e => {
    console.error(e);
})
