// Truthy와 falsy

// falsy: false와 거의 비슷한 값
console.log(!undefined); // false와 비슷한 값이기에 !로 반전 시켜줬을때 True가 된다.
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);// NaN(Not a number): 숫자에다가 문자열을 연산 시켰을때 나옴

//Truthy: True와 거의 비슷한 값, falsy한 값을 제외한 모든 값
// 예
console.log(!1);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});