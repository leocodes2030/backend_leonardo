const express = require('express');

const app = express();

app.use(express.json());

app.get('/sobre', (req, res) => {
    res.json({
        nome: "Leonardo",
        disciplina: "Back-End",
        ano: "Segundo ano medio"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/sobre");
});