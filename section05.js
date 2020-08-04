// 함수

function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);


function hello(name) {
    return `hello ${name}!`; // 키보드 ~와 같이 있는 기호 ` (백틱)
}

const result = hello('pji');
console.log(result);


// 함수 연습

// 점수를 등급 형태로 변환 하는 함수

function getGrade(score) {
    if (score === 100) {
        return 'A+';
    }else if (score >= 90) {
        return 'A';
    }else if (score === 89) {
        return 'B+';
    }else if (score === 80) {
        return 'B';
    }else if (score === 79) {
        return 'C+';
    }else if (score >= 70) {
        return 'c';
    }else if (score === 69) {
        return 'D+';
    }else if (score >= 60) {
        return 'D';
    }else{
        return 'F';
    }
}

const score = getGrade(100);

console.log(score);


// 화살표 함수

const add = (a, b) => {
    return a +b;
}

const hello = (name) => {
    console.log(`hello, ${name}!`)
}

hello('pji');
