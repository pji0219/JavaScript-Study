// 단축 평가 논리 계산법 : 논리 연산자를 이용해서 코드를 더 짧게 쓰는법

/* AND연산자는 왼쪽의 값이 true나 truthy한 값일때는 오른쪽의 값을 출력해주고
왼쪽의 값이 false나 falsy한 값일때는 왼쪽을 출력 */
console.log(true && 'hello'); /* AND연산자를 썼을때 앞의 값이 true값이나
Truthy한 값이면 뒤에 값을 출력 해줌 */
console.log(false && 'hello'); // 앞의 갑이 false이면 false로 출력
console.log('hello' && 'bye'); // truthy한 값이기에 bye 출력
console.log(null && 'hello'); // falsy한 값이기에 null 출력
console.log(undefined && 'hello'); // falsy한 값이기에 undefind 출력
console.log('' && 'hello'); // falsy한 값이기에 공백 출력
console.log(0 && 'hello'); // falsy한 값이기에 0 출력
console.log(1 && 'hello'); // truthy한 값이기에 hello 출력

const object = null;

const name = object && object.name;
console.log(name);

const object2 = {name: '123'};

const name2 = object2 && object2.name;
console.log(name2);


/* OR연산자는 만약 어떤 값이 falsy하다면 대체로 사용할 값을 지정해줄때 매우 유용하다.
(왼쪽의 값이 falsy한 값이라면 오른쪽 값을 사용) */

console.log(false || 'hello');
console.log('' || '이름없다');
console.log(null || '널이다~');
console.log(undefined || 'defined 되지 않았다!');
console.log(0 || '제로다');

console.log(1 || '음?'); // AND연산자와 반대로 true나 truthy한 값이 앞부분에 오면 앞부분 출력

// 보통의 방법
const namelessDog = {
    name: ''
};

function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
        return '이름이 없는 동물입니다.';
    }
    return name;
}

const name3 = getName(namelessDog);
console.log(name3);

// OR연산자를 이용한 방법

const namelessDog2 = {
    name: ''
};

function getName2(animal) {
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.';
}

const name4 = getName2(namelessDog2);
console.log(name4);