const input = require("readline-sync");

let num1 = input.questionInt("Digite o primeiro numero: ");
let num2 = input.questionInt("Digite o segundo primeiro: ");

console.log("Soma = " + (num1 + num2));
console.log("Subtração = " + (num1 - num2));
console.log("Multiplicação = " + (num1 * num2));

if(num2 == 0) {
    console.log("Valor invalido");
} else {
    console.log("Divisão = " + (num1 / num2));
}