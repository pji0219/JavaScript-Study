// 조건문 더 스마트하게 쓰기

// 특정 텍스트가 존재하는지 안하는지 확인
function isAnimal(text) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(text);
    /* 배열 내장함수 includes 배열에 텍스트가 존재하면 true
    아니면 false */
}

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));


const isAnimal2 = (text) => ['고양이', '개', '거북이', '너구리'].includes(text);

console.log(isAnimal2('개'));
console.log(isAnimal2('노트북'));


// 어떤 값을 넣느냐에 따라 반환하는 코드가 달라지게 하기

function getSound(animal) {
    const sound = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '쨱쨱',
        비둘기: '구구구구'
    };
    return sound[animal] || '...?'
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('사람'));


function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹!');
        },
        비둘기() {
            console.log('구구구구');
        }
        
    }
    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
}


makeSound('개');
makeSound('비둘기');
makeSound('사람');