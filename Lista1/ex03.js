const input = require("readline-sync")

let num = input.questionInt("Digite um numero: ")
let decisao = num % 2 === 0 ? "O numero é par" : "O numero é impar"

console.log(decisao)