console.log(typeof Object); // funçao
console.log(typeof new Object); // objeto instanciado da funçao Objeto

const cliente = function (){}
console.log(typeof cliente); // funcao criada
console.log(typeof new cliente);// objeto instanciado da funçao cliente

class Produto {}
console.log(typeof Produto); // funcao criada
console.log(typeof new Produto());// objeto instanciado da funçao Produto