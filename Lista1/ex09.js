const input = require("readline-sync")

const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

let a = input.questionInt("Digite o primeiro numero: ")
let b = input.questionInt("Digite o segundo numero: ")

console.log(min(a, b));