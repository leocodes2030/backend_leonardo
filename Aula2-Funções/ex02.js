//Declare uma função validarSenha(senha) que retorna true se a senha tiver 8 ou mais caracteres e false caso contrário. Use senha.length para verificar o tamanho. Leia uma senha e exiba "Senha valida" ou "Senha fraca – minimo 8 caracteres".

const input = require("readline-sync")

function validarSenha(senha) {
    return senha.length >= 8;
}

let senha = input.question("Digite uma senha de no minimo 8 digitos: ")

if (validarSenha(senha)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca – minimo 8 caracteres");
}