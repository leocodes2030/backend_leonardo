const produtos = [
    {id: 1, nome: "Teclado", preco: 120},
    {id: 2, nome: "Mouse", preco: 80},
    {id: 3, nome: "Monitor", preco: 900}
];

console.log(produtos.find(p => p.id === 1));
console.log(produtos.filter(p => p.preco < 100));