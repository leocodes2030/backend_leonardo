const input = require("readline-sync")

function quadrado(x) {
    return x * x;
}

let x = input.questionInt("Digite um número: ")

console.log(`O quadrado de ${x} é: ${quadrado(x)}`)

const quadradoArrow = (x) => x * x;

console.log(`O quadrado de ${x}, usando arrow function é: ${quadradoArrow(x)}`)