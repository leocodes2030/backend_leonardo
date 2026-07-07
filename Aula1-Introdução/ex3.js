const input = require("readline-sync");

let soma = 0;

for (let i = 0; i < 5; i++) {
    let nota = input.questionInt(`Digite o ${i+1} valor: `);
    soma = soma + nota;
}

let media = soma / 5;

if (media >= 7) {
    console.log(`Aprovado, media final: ${media.toFixed(1)}`);
} else if (media >= 5) {
    console.log(`Recuperacao, media final: ${media.toFixed(1)}`);
} else {
    console.log(`Reprovado, media final: ${media.toFixed(1)}`);
}
