const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Pedro", nota: 6.0 },
  { nome: "Maria", nota: 9.2 },
  { nome: "Lucas", nota: 5.5 },
  { nome: "Beatriz", nota: 7.0 }
];

const alunosComSituacao = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

console.log("Alunos com Situação:", alunosComSituacao);

const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);

const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
