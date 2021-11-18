// em objetos e funçoes, os valores sao passados por referencia, apontam pro mesmo endereço mesmoria
// em tipos primitivos os valores sao passados por valor

let valor 
console.log(valor); // undefined, null

valor = null; // ausencia de valor
console.log(valor);// resultado nulo

const produto = {}
console.log(produto.preco);// resultado undefined
console.log(produto);// resultado {}

produto.preco = 3.50// setei um preço no produto, e o mesmo produto ficara > {preco : 3.50}
console.log(produto);

produto.preco = undefined;// evite atribuir undefined, prefira null ou 0
console.log(produto);// resultado {preco: undefined}
console.log(!!produto.preco);// resultado false. negando 2x um valor undefined
//delete produto.preco;// deletando o preço
console.log(produto);
