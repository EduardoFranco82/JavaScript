const pessoa = {
    nome: 'Ana',
    idade: 35,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 55
    }


}

const { nome, idade } = pessoa;// pegar os valores dos objetos dentro de um obj. de pessoa.
console.log(nome, idade);

const{ nome :n , idade : i} = pessoa;// pegar os valores dos objetos e ja atribuir a uma variavel criada
console.log(n,i);

const{ sobrenome, bemHumorado= true} = pessoa;// nao existe dentro do obj pessoa, mas atribuiu um valor. o outro da undefined
console.log(sobrenome, bemHumorado);

