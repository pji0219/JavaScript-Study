function calculate(command, a, b) {
    switch (command) {
        case 'add':
            console.log(a + b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        case 'multiply':
            console.log(a * b);
        case 'remainder':
            console.log(a % b);

        default:
            break;
    }
}

calculate('remainder', 10, 2);