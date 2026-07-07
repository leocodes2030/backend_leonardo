const alunos = [
  { id: 1, nome: "Ana", nota: 8.5 },
  { id: 2, nome: "Bruno", nota: 6.0 },
  { id: 3, nome: "Carlos", nota: 9.2 },
  { id: 4, nome: "Diana", nota: 7.8 },
  { id: 5, nome: "Eduardo", nota: 5.5 }
]

const novoArray = alunos.map(a => {

  let situacao;

  if (a.nota > 7) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  return {
    nome: a.nome,
    nota: a.nota,
    situacao: situacao
  };
});