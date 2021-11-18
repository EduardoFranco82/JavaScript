// construindo de forma literal 
const obj1 = {};
console.log(obj1);

// object em JS
console.log(typeof Object, "      ", typeof new Object);
const obj2 = new Object
console.log(obj2);

// funçoes construtoras

function Produto (nome, preco, desconto){

    this.nome = nome;// prestar atençao. so precisa fazer this.nome = nome
    this.getPrecoComDesconto = () => { return preco * (1 - desconto)}// no nome da funçao tambem poe this, mas no retorno nao.

}
const p1 = new Produto('carro', 100, 0.15);// ter atençao
const p2 = new Produto('moto', 1000, 0.25); // ter atençao

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());// prestar atençao para chamar a funçao de dentro do obj

//FUNÇAO FACTORY

function criarFuncionario(nome, salarioBase, faltas){

    return{
        nome,
        salarioBase,
        faltas,
        getSalario (){ return ((salarioBase / 30) * (30 - faltas)).toFixed(2)}



    }

    


}
    const f1 = criarFuncionario('paulo', 1000, 1)
    const f2 = criarFuncionario('maria', 2000, 0)

    console.log(f1.getSalario(), 'a outra', f2.getSalario() );

    // Object.create

    const objetoCriado = Object.create(null);// atençao com null
    objetoCriado.nome = 'ana'
    objetoCriado.sobrenome = 'livia'
    objetoCriado.idade = 10

    console.log(objetoCriado);

    // uma funçao famosa que retorna objeto

    const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
    console.log(fromJSON.info);