// classe e uma forma diferente de declarar funçao em js

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    falar() {
        console.log(`o nome é ${this.nome}`);
    } // quando vai fazer uma funçao dentro de uma classe nao precisa usar palavra reservada function
}

const p1 = new Pessoa('Eduardo Franco');
p1.falar();// pra chamar uma funçao dentro do objeto

const criarPessoa = nome =>{
    return{ 
        falar : () => console.log(`Meu nome é ${nome}`)// nesse contexto de declaraçao, nao precisa de this
    }
}

const p2 = criarPessoa('Paulo')
p2.falar();

