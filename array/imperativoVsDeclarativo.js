const alunos = [

{nome:"ana", nota: 7.9},
{nome:"pedro", nota: 9.2}

];

// IMPERATIVO OU SEJA, COMO TEM QUE SER FEITA
let total1 = 0;
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

// DECLARATIVA O QUE TEM QUE SER FEITO // PROMOVE O REUSO FICA MAIS CLARO
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);

// SQL - É DECLARATIVA OU SEJA O QUE IMPORTA E O QUE TEM QUE FAZER NAO COMO 