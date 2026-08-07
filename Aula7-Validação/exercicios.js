const express = require("express")
const app = express()

app.use(express.json())

//Exercicio 01

let produtos = [
    {id: 1, nome: "PC", preco: 2700.00},
    {id: 2, nome: "Mouse", preco: 89.90}
]

let proximoId = 3

//Exercicio 02

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

//Exercicio 03

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({
            erro: "O parâmetro 'id' é inválido."
        });
    }

    const produto = produtos.find(a => a.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado."
        });
    }

    res.json(produto);
});

//Exercicio 04

app.post('/produtos/produtoNovo', (req, res) => {
    
    console.log(req.body);

    const novoProduto = {
        id: proximoId,
        nome: req.body.nome,
        preco: req.body.preco
    }

    if (!novoProduto.nome) {
        return res.status(400).json({ erro: "O campo 'nome' é obrigatório." });
    }

    if (novoProduto.preco === undefined || novoProduto.preco === null || isNaN(novoProduto.preco)) {
        return res.status(400).json({ erro: "O campo 'preco' é obrigatório." });
    }

    if (isNaN(novoProduto.preco) || novoProduto.preco < 0) {
        return res.status(400).json({
            erro: "O preço deve ser um número e não pode ser negativo."
        })
    }

    produtos.push(novoProduto);
    proximoId++;

    res.status(201).json(novoProduto);
})

// Exercicio 05

app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({
            erro: "O parâmetro 'id' é inválido."
        });
    }

    const produto = produtos.find(a => a.id === id);

    if (!produto) {
        return res.status(404).json({
            erro: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.json(produto);
});

// Exercicio 06

app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id)
    const produto = produtos.find(a => a.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado" })
    }

    produtos = produtos.filter(a => a.id !==id)

    res.json({ mensagem: "Produto removido com êxito!"})
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});
