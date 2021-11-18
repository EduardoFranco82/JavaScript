
// TRABALHA COM ACUMULADOR + ATUAL


const alunos= [
{nome:"joão", nota:7.3, bolsista: false},
{nome:"maria", nota:9.2, bolsista:true},
{nome:"pedro", nota:9.8, bolsista: false},
{nome:"ana", nota:8.7, bolsista:true},

]

console.log(alunos.map(a=> a.nota));// retorna um array com as notas

const resultado = alunos.map(a=> a.nota).reduce(function(acumulador, atual){// CALLBACK TRABALHANDO COM ACUMULADOR
    console.log(acumulador, atual);
    return acumulador + atual;
},10)
console.log(resultado);