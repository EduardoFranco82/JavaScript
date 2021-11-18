// FILTER DEVOLVE O FILTRO DENTRO DO ARRAY, CONDIÇOES DENTRO DO ARRAY


const produtos = [

{nome : "notebook"          , preco: 2499, fragil: true },
{nome :"ipad"               , preco: 4199, fragil: true },
{nome : "copo de vidro"     , preco: 12.49, fragil: true},
{nome : "copo de plastico"  , preco: 18.99, fragil: false},

]
// return true => vai retornar tudo, return false => nao retorna nada
console.log(produtos.filter(function(e){
    return false
}));

// PARA ARMAZENAR OS DADOS NUMA OUTRA CONSTANTE, ESSA CONSTANTE TEM QUE TER UMA FUNÇAO
// UMA VEZ QUE JA E OBJ, BASTA FAZER
// fiz 2 funçoes que retornam de dentro de 1 obj aquele determinado parametro
// depois disso eu filtro um array

const caro = p => p.preco >= 500
const fragil = p => p.fragil // ou p.fragil == true

console.log(produtos.filter(caro).filter(fragil));// retorna o array inteiro