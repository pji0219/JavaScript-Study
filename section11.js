// 삼항 연산자

const array = [];

let text = array.length === 0 
    ? '배열이 비어있습니다.' // 너무 길어서 엔터를 침
    : '배열이 비어있지 않습니다.';

console.log(text);

// 삼항 연산자 중첩 (코드가 헷갈릴수 있기 때문에 가급적 권장하지 않음)
// 이럴 경우엔 if문 권장
const condition1 = false;
const condition2 = false;

const value = condition1
    ? '와우'
    : condition2
        ? 'blabla'
        :'foo'

console.log(value);