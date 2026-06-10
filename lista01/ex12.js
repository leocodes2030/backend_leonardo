const input = require("readline-sync");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

let a = input.questionInt("Digite o primeiro numero: ");
let b = input.questionInt("Digite o segundo numero: ");

console.log("Soma:", calcular(a, b, somar));
console.log("Subtracao:", calcular(a, b, subtrair));
console.log("Multiplicacao:", calcular(a, b, multiplicar));