const input = require("readline-sync")

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisao por zero";
    } else {
        return a / b;
    }
}

let a = input.questionFloat("Digite o primeiro valor: ");
let b = input.questionFloat("Digite o segundo valor: ");

console.log("Soma = " + somar(a, b));
console.log("Subtracao = " + subtrair(a, b));
console.log("Multiplicacao = " + multiplicar(a, b));
console.log("Divisao = " + dividir(a, b));