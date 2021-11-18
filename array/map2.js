//CRIANDO UM ARRAY DE JSON
const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco":7.50}'
    ]

    // RETORNANDO UM ARRAY APENAS COM OS PREÇOS USANDO MAP

    //1 - CONVERTER O JSON PARA OBJETO 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);
