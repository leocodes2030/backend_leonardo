const input = require("readline-sync");

function executarOperacao(a, b, operacao) {
    let resultado = operacao(a, b);
    console.log(resultado);
}

executarOperacao(10, 3, (a, b) => a + b);
executarOperacao(10, 3, (a, b) => a * b);
executarOperacao(10, 3, (a, b) => a - b);