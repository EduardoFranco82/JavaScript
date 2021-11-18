// funçao factory, sao funçoes que retornam um objeto

function criarPessoa(){
    return { 
        nome:'ana',
        idade: 50
    }
}

console.log(criarPessoa());