// UM METODO CRIADO PARA FAZER UM CONCAT + MAP ou seja FLAT MAP

const escola = [
    {nome: 'Turma 1', alunos: [{nome: 'gustavo',nota: 8.1}, {nome: 'ana',nota: 9.3}]},
    {nome: 'Turma 2', alunos: [{nome: 'rebeca',nota: 8.9}, {nome: 'roberto',nota: 7.3}]},
]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)
const nota1 = escola.map(getNotaTurma)
console.log(nota1);

// CONSTRUINDO UM FLATMAP

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2);