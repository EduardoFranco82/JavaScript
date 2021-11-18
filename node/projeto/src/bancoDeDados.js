const sequence = {
    _id : 1,
    get id () { return this._id++}// quando chamar sequence.id ele retorna id++
};

const produtos = {}

function salvarProduto (produto){
    if (!produto.id) produto.id = sequence.id // se o produto nao tiver ai, adiciona um
    produtos[produto.id] = produto
    return produto;

}
 
function getProduto(id){
    return produtos[id] || {}// caso esteja nullo ou undefined, retorna obj vazio
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id] 
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProdutos, getProduto, excluirProduto}