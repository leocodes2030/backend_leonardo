const filmes = [
    {id: 1, titulo: "Matrix", ano: 1999, nota: 9.2},
    {id: 2, titulo: "Interestelar", ano: 2014, nota: 9.5},
    {id: 3, titulo: "Shrek", ano: 2001, nota: 8.0}
];

const filme = filmes.find(filme => filme.id === 2);
console.log(filme);

const filmesAprovados = filmes.filter(filme => filme.nota >= 9);
console.log(filmesAprovados);

const titulosFilmes = filmes.map(filme => filme.titulo);
console.log(titulosFilmes);