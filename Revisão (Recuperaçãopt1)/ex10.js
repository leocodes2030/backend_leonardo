const filmes = [
    {id: 1, titulo: "Matrix", ano: 1999, nota: 9.2},
    {id: 2, titulo: "Interestelar", ano: 2014, nota: 9.5},
    {id: 3, titulo: "Shrek", ano: 2001, nota: 8.0}
];

app.get("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);

    const filme = filmes.find(f => f.id === id);
    res.json(filme);
})