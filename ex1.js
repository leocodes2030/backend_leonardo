const input = require("readline-sync");

let nome = input.question("Digite seu nome: ");
let idade = input.questionInt("Digite sua idade: ");
let cidade = input.question("Digite sua cidade: ");

console.log(`Ola! Meu nome e ${nome}, tenho ${idade} anos e sou de ${cidade}.`);