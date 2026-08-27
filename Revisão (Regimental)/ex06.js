const express = require("express");
const app = express() ;
app.use(express.json());

const usuarios = [
{ id: 1, nome: "João", idade: 25 },
{ id: 2, nome: "Maria", idade: 30 },
{ id: 3, nome: "Pedro", idade: 28 },
{ id: 4, nome: "Ana", idade: 22 },
{ id: 5, nome: "Lucas", idade: 35},
{ id: 6, nome: "Carla", idade: 27 },
{ id: 7, nome: "Rafael", idade: 31 },
];

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json(usuario);
});

app.post("/usuarios", (req, res) => {
    const { nome, idade } = req.body;
    const novoUsuario = { id: usuarios.length + 1, nome, idade };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});