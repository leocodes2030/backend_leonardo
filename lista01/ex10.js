const input = require("readline-sync")

function contarLetra(texto, letra){

    let i = 0;
    let quant = 0;

    while(i < texto.length) {
        if(texto[i] === letra) {
            quant++
        }
        i++
    }
    
    return quant;
};

let texto = input.question("Digite uma palavra: ")
let letra = input.question("Digite uma letra: ")

console.log(`Essa letra aparece um total de ${contarLetra(texto, letra)} vezes na palavra digitada`)