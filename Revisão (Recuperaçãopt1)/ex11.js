app.get("/filmes/:id", (req , res ) => {
    const id = req.params.id;
    const filme = filmes.find(f => f . id === id);
    res.json(filme);
});

//o fato do req.params.id ser uma string e não estar sendo transformado em number.