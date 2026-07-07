const input = require("readline-sync")

const produtos = []

console.log("---------")

for (let i = 0; i < 3; i++) {
    let nome = input.question(`Digite o nome do ${i + 1} produto: `);
    let preco = input.questionFloat(`Digite o preco do produto: `);

    produtos.push({
        id: i + 1,
        nome: nome,
        preco: preco
    });

    console.log("---------")
}

console.log("\nTabela Atualizada:\n")

for (let i = 0; i < produtos.length; i++) {
  console.log(`ID: ${produtos[i].id}, Nome: ${produtos[i].nome}, Preço: R$ ${produtos[i].preco}`);
}

console.log("---------")

console.log("\nProdutos acima de R$ 20,00:\n");

const caros = produtos.filter(p => p.preco > 20);

console.log(caros)