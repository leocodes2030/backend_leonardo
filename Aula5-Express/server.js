const express = require('express');

const app = express();

const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 249.90 },
    { id: 2, nome: "Mouse Gamer", preco: 75.90 },
    { id: 3, nome: "Headset", preco: 89.90 },
    { id: 4, nome: "Monitor 24 Polegadas", preco: 899.90 }
];

app.use(express.json());

app.get('/sobre', (req, res) => {
    res.json({
        nome: "Leonardo",
        disciplina: "Back-End",
        ano: "Segundo ano medio"
    });
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/status', (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor online."
    });
})

app.get('/produtos/caros', (req, res) => {
    const produtosCaros = produtos.filter(produto => produto.preco > 100);

    res.json(produtosCaros);
});

app.listen(3000, () => {
    console.log("Exercicio 01 em: http://localhost:3000/sobre");
    console.log("Exercicio 02 em: http://localhost:3000/produtos")
    console.log("Exercicio 03 em: http://localhost:3000/status")
    console.log("Exercicio 04 em: http://localhost:3000/produtos/caros")
});