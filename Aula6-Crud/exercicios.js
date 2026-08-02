const express = require("express")
const app = express()

app.use(express.json())

//Exercicio 01

let produtos = [
    {id: 1, nome: "PC", preco: 2700.00},
    {id: 2, nome: "Mouse", preco: 89.90}
]

let proximoId = 3;

//Exercicio 02

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

//Exercicio 03

app.post('/produtos/produtoNovo', (req, res) => {
    
    console.log(req.body);

    const novoProduto = {
        id: proximoId,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novoProduto);
    proximoId++;

    res.status(201).json(novoProduto);
})

//Exercicio 04

app.post('/produtos/produtoNovo', (req, res) => {
    
    const novoProduto = {
        id: proximoId,
        nome: req.body.nome,
        preco: req.body.preco
    }

    produtos.push(novoProduto);
    proximoId++;

    res.status(201).json(novoProduto)
    res.json(produtos)
})

// Exercicio 05

app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    const produto = produtos.find(a => a.id === id);

    if(!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

app.put('/produtos/:id', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});
