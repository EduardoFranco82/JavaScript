// pessoa -> 123  -> {...}
const pessoa = {nome:'joao'}
pessoa.nome = 'mariada'
console.log(pessoa);
console.log(pessoa.nome);

//pessoa = {nome:'carlos'} DA ERRO POIS JA ATRIBUIU UMA CONSTANTE EM PESSOA


// usando object.freeze, nao consigo alterar, incluir , ou deletar
Object.freeze (pessoa)
pessoa.nome = 'helena'
pessoa.end = 'rua antonio lima 50'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);


const pessoaConstante = Object.freeze ({nome:'carlos'})
pessoaConstante.nome = 'eduardo'// nao altera
console.log(pessoaConstante);
