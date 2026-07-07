const input = require("readline-sync");

let array = [];

function reverter(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

for (let i = 0; i < 10; i++) {
    let temp = input.questionInt(`Digite o ${i + 1} valor: `);
    array.push(temp);
}

reverter(array);