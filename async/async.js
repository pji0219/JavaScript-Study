// async & await

// 1. async
async function fetchUser() {
    // do network reqeust in 10secs....
    return 'park';
}

const user = fetchUser();

user.then(user => console.log(user));

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

// async function getApple() {
//     await delay(1000);
//     throw 'error';
//     return '🍎';
// } 에러

async function getBanana() {
    await delay(1000);
    return '🍌';
}

/*function pickFruit() {
  return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
} await 안 썼을 때*/


async function pickFruit() {
    const apple = await getApple();
    const banana = await getBanana();
    
    return `${apple} + ${banana}`;
}

pickFruit().then(fruit => console.log(fruit));


// async function pickFruit() {
//     try {
//         const apple = await getApple();
//         const banana = await getBanana();
    
//         return `${apple} + ${banana}`;
          
//     } catch(error) {
//         console.log(error);
//     }
// }

// pickFruit().catch(fruit => console.log(fruit)); 에러


// 3. 유용한 Promise API들

Promise.all
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruit => fruit.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
