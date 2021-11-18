// COLEÇAO DINÂMICA DE PARES CHAVE/VALOR

const produto = new Object
produto.nome = 'geladeira'
produto['marca do produto'] = 'bastemp'
produto.preco = 800

console.log(produto);

// deletando 
delete produto.nome
delete produto['marca do produto']

console.log(produto);

const carro = {

    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'eduardo',
        idade: 37,
        endereco: {
            logradouro: 'Rua Ribeiro da Luz',
            numero: 123
        }
    },
    condutores: [{
        nome: 'carla',
        idade: 23
    },

    {
        nome: 'raul',
        idade: 22

    }],
    calcularValorSeguro: function () {


    }


}
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'rua pedro lima'

console.log(carro);


//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores);// da undefined
console.log(carro.condutores.length);// da erro, pois condutores eu apaguei na linha 51

