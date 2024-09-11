function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        add(firstNum, secondNum);
    } else if (operator === "-") {
        subtract(firstNum, secondNum);
    } else if (operator === "*") {
        multiply(firstNum, secondNum);
    } else if (operator === "/") {
        divide(firstNum, secondNum);
    }
}

// console.log(add(47, 16));
// console.log(subtract(22, 11));
// console.log(multiply(69, 14));
// console.log(divide(7, 22));