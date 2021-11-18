// par nome/valor

const saudacao = 'Opa' // contexto lexico 1

function exec (){

    const saudacao = 'Fala!!!' // contexto lexico 2
    return saudacao // da pra retornar direto a variavel criada
}

// objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'eduardo',
    idade: 32,
    peso: 95,
    endereco: {
        logradouro: 'rua ribeiro da luz',
        numero: 55
        
    }


}
console.log(saudacao);
console.log(exec());
console.log(cliente);
