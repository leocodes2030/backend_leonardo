const input = require("readline-sync")

let C = input.questionFloat("Digite uma temperatura em celsius: ")

console.log(`Essa mesma temperatura em fahrenheit é igual a: ${C * 1.8 + 32}`)