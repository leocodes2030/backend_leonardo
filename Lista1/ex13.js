function range(inicio, fim) {
    let array = [];

    while (inicio <= fim) {
        array.push(inicio);
        inicio++;
    }

    return array;
}

function soma(array) {
    let total = 0;

    let i = 0;
    while (i < array.length) {
        total += array[i];
        i++;
    }

    return total;
}

console.log(soma(range(1, 10)));