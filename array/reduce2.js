const alunos = [
    { nome: "joão", nota: 7.3, bolsista: false },
    { nome: "maria", nota: 9.2, bolsista: false },
    { nome: "pedro", nota: 9.8, bolsista: false },
    { nome: "ana", nota: 8.7, bolsista: false },

]
// DESAFIO PARA RETORNAR TRUE OR FALSE
// DESAFIO 1 - TODOS OS ALUNOS SAO BOLSISTAS?
const saoBolsistas = (resultado, bolsistas) => resultado && bolsistas // se o resultado é true, ou seja o acumulador, o bolsista tambem tem que ser
console.log(alunos.map(a => a.bolsista).reduce(saoBolsistas));// pega o true e false para checar o acumulador anterior
    
//DESAFIO 2 - ALGUM ALUNO E BOLSISTA?
const algumBolsistas = (resultado, bolsistas) => resultado || bolsistas // se o resultado é true, ou seja o acumulador, o bolsista tambem tem que ser
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas));//
