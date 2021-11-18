// o this pode variar como true e false, teste feito no console dependendo do contexto em js
// em funçao arrow, nunca varia. esse motivo de criar funçao arrow 

const pessoa = {
    saudacao: 'Bom dia!!',
    falar (){
        console.log(this.saudacao);// se arrancar o this, pessoa.falar nao funciona
    }
}
pessoa.falar();

const falar = pessoa.falar// da undefined
falar()// da undefined. conflito entre paradigmas: oo e funcional

// usar a funçao bind() para resolver isso. Bind sempre vai amarrar a constante criada para usar o objeto 

const falarDePessoa = pessoa.falar.bind(pessoa);// . bind so vai amarrar o obj nesta constante
falarDePessoa();

