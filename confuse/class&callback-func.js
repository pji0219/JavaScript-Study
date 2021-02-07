// 클래스 Counter는 숫자가 5배가 될 때마다 무엇을 할지는 자체적으로 정해져 있지는 않다.
class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;

        if (this.counter % 5 !== 0) {
            console.log(this.counter);
        }
        else {
            // 등록된 콜백함수가 있으면 호출해주고 없으면 undefined라서 호출하면 안되기 때문에 그 여부를 따져야한다.
            this.callback && this.callback(this.counter);
        }
    }
}

// 콜백함수를 전달함으로써 우리가 원하는 기능을 수행할 수 있다.
const coolCounter = new Counter(num => console.log(`yo! ${num}`));

for (let i = 0; i < 10; i++) {
    coolCounter.increase();
}
