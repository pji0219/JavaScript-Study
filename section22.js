// Promise all, Promise race

//Promise all: 여러개의 Promise를 동시에 처리하고 싶을때 사용
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}


async function process() {
   const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
}

process();


// Promise들 중 가장 빨리 끝나는 것 출력
function sleep1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog1 = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit1 = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtle1 = async () => {
    await sleep(3000);
    return '거북이';
}


async function process1() {
   const first = await Promise.race([getDog1(), getRabbit1(), getTurtle1()]);
    console.log(first);
}

process1();