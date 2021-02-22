/*
    변수는 프로그래밍 언어에서 우리가 처리해야 될 데이터를 담을 수 있는 곳이다.
    그래서 변수를 통해 데이터에 접근하고 데이터를 업데이트할 수 있다.
*/

// primitive타입: number, string, boolean, null, undefined, symbol (이 타입을 제외한 모든 타입들은 오브젝트)
// 오브젝트는 한두가지 이상의 다양한 데이터를 한군데에 묶어둔 것(예: 배열, 리스트, 함수 등)

let number = 2; // 변수를 선언함과 동시에 메모리에 우리의 변수를 위한 공간이 생기고 데이터가 적재된다.
let number2 = number; // 새로운 number2 변수를 위한 공간이 메모리에 생기고 number의 값이 복사 되어 할당 된다.
console.log(number);
console.log(number2);


number2 = 3;

console.log(number);
console.log(number2); // number2의 값이 변경 되어도 number의 값이 복사되어 할당 되었던 것이었기에 number에는 영향이 없다.

// object
/* 
    오브젝트에 있는 키도 키마다 각각 메모리에 할당된다고 생각하면 된다.
    그리고 이것들을 묶은 레퍼런스 주소가 변수에 할당 된다.
*/
/* 
    다른 변수에 할당 시 primitive타입은 데이터 자체가 변수에 담겨 있어서 데이터 자체가 복사되어서 들어오지만 오브젝트는 오브젝트가 가리키고 있는
    레퍼런스 주소만 복사되어 변수에 들어온다.
*/

let obj = {
    name: 'park',
    age: 33,
};
console.log(obj.name);

let obj2 = obj; // obj의 레퍼런스 주소가 복사 되어 할당 된다.
console.log(obj2.name);

obj.name = 'kim';
console.log('--------');
console.log(obj.name);
console.log(obj2.name);