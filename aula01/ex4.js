const input = require("readline-sync");

let tabuada = input.questionInt(`Digite o numero que quer para sua tabuada: `);

for(let i = 1; i<=10; i++) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}