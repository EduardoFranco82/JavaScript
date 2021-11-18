// criando uma factory e instanciando

function criarProduto(nome, preco){
    return{ 
        nome, 
        preco, 
        desconto : 0.5
    }
}
console.log(criarProduto('carro',1.500));
console.log(criarProduto('casa',55.500));
console.log(criarProduto('tv',1.800));
// retorna 3 objetos.