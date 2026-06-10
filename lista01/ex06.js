const input = require("readline-sync")

let n = input.questionInt("Digite um valor inteiro: ")

for(let i=n; i >= 1; i--){
    console.log(i)
}

console.log("Fim!")