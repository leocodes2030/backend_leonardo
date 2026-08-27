const filmes = [
    {id: 1, titulo: "Matrix", ano: 1999, nota: 9.2},
    {id: 2, titulo: "Interestelar", ano: 2014, nota: 9.5},
    {id: 3, titulo: "Shrek", ano: 2001, nota: 8.0}
];

const filme = filmes.find(f => f.ano === 2020);
console.log(filme); // Retorna undefined, pois não há nenhum filme com o ano de 2020.

const filmeb = filmes.filter(f => f.ano === 2020);
console.log(filmeb); // Retorna um array vazio, pois não há nenhum filme com o ano de 2020.