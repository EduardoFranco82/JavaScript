// PROTOTYPE É HERANÇA E BUSCA NOS PAIS UM ATRIBUTO QUE NAO TEM EM VC. PROTOTIPO
// Object é uma funçao, porem tem um prototype

const ferrari = {
    modelo: 'f40' ,
    velocidadeMax:344
}

const volvo = {
    modelo: 'v70' ,
    velocidadeMax:244
}

console.log(ferrari.__proto__);//{}
console.log(ferrari.__proto__ === Object.prototype);// true
console.log(ferrari.__proto__ === Object.prototype);//true
console.log(Object.prototype.__proto__ === null);// true

function MeuObjeto(){}
console.log(typeof Object,typeof MeuObjeto);// function, function
console.log(Object.prototype, MeuObjeto.prototype);// {} {}

