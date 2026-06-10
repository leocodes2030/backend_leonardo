const input = require("readline-sync")

let base = input.questionFloat("Digite o tamanho da base do triangulo: ")
let altura = input.questionFloat("Digite a altura dele: ")

console.log(`A area desse triangulo é de: ${(base*altura)/2}`)