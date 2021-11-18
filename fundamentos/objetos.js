const prod1 = {} // notaçao para construir

prod1.nome = 'video game'
prod1.preco = 4998.90
prod1['desconto'] = 0.40

console.log(prod1);

const prud2 = {
    nome: 'tv',
    preco: 5000.95 ,
    obj: {
        carro: 'fiat',
        obj: {
            cidade:'Itanhandu'
        }
    }
    
}
console.log(prud2);

//json é um formato textual para ler valores entre apis. obj é diferente de json