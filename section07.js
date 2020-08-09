// 배열

const array = [1, 'blabla', {name: '멍멍이'}, 4];

console.log(array);
console.log(array[2]);

const array1 =[
    {name: '멍멍이'},
    {name: '야옹이'}
];

// push는 배열 안에 새로운 원소를 추가 할때 사용한다.
array1.push({
    name: '멍뭉이'
});

console.log(array1);

// 배열의 크기 출력
console.log(array1.length);