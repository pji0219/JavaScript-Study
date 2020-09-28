class Test {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }

    say() {
        console.log(`${this.sound}`);
    }
}

export default Test;