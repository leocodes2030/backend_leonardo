const input = require("readline-sync");

const secreto = 42;
let tentativas = 0;

while(true){ 
    let chute = input.questionInt("Digite um chute na senha: ")
    tentativas++;

    if(chute === secreto) {
        console.log(`Acertou! Tentativas: ${tentativas}`)
        break;
    } else if(chute < secreto) {
        console.log(`O número secreto é MAIOR`)
    } else {
        console.log(`O número secreto é MENOR`)
    }
}