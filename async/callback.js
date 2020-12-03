console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


// 동기적 콜백: 즉각적으로 동기적으로 실행하는 콜백
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('Hello'));

// 비동기적 콜백: 나중에 언제 실행 될지 예측할 수 없는 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);


// 콜백 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') || 
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password =  prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)