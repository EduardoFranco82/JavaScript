const pessoa = {
    nome: 'eduardo',
    idade: 30,
    peso:80
}

console.log(Object.keys(pessoa));// chave [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa));// valor [ 'eduardo', 30, 80 ]
console.log(Object.entries(pessoa));// dados gerais em arrays [ [ 'nome', 'eduardo' ], [ 'idade', 30 ], [ 'peso', 80 ] ]

Object.entries(pessoa).forEach(([chave,valor])=>{ // usando forech para pegar dados do array
    console.log(`${chave} : ${valor}`);
})

Object.defineProperty(pessoa,'DataNascimento',{

    enumerable : true,// se chamar em algum lugar como chave, pega. se false nao pega
    writable : false,// nao deixa sobrescrever
    value : '01/01/2019'
})
pessoa.DataNascimento = '01/01/2000'// nao vai setar vai manter 01/01/2019
console.log(pessoa.DataNascimento);
console.log(Object.keys(pessoa));

// object.assign (EcmaScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3 , a:4}

const obj = Object.assign(dest, o1, o2)// vai colocar num obj destino os valores dos demais objs
console.log(obj);

// Object.freeze
Object.freeze(obj)// travou o obj.

obj.c = 123456// nao vai pegar
console.log(obj);