const input = require("readline-sync");

let tamanho = input.questionInt("Digite o tamanho: ");
let tabuleiro = "";

for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
        if ((linha + coluna) % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        }
    }
    tabuleiro += "\n";
}

console.log(tabuleiro);