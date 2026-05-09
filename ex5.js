const input = require("readline-sync");

let impar = 0;
let par = 0;

for(let i=0; i<10; i++) {
    let num = input.questionInt(`Digite o ${i+1} valor: `);

    if(num % 2 === 0) {
        par++
    } else {
        impar++
    }
}

console.log(`Dentro desta lista de números existem um total de ${par} número pares e ${impar} números impares`)
