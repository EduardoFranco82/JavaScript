
//const matematica = Math.random() * 100;  COMO FUNCIONA MATH.RANDOW  DA UM NUMERO 0.12145 AI MULT.POR 10 100 1000
//console.log(matematica);


function rand({min =0, max = 1000}){ // VAI PEGAR DE UM OBJ OS ATRIBUTOS DE MIN E MAX JA ESTIPULANDO OS VALORES
    const valor = Math.random() * ( max - min ) + min;
    return Math.ceil(valor)
}

const obj = {max:60 , min:40}
//console.log(rand({min:50, max: 60})); DA PRA FAZER ASSIM
console.log(rand(obj)) // passando um obj criado
console.log(rand({min : 900})) // passando minimo de 900 e nao passando maximo
console.log(rand({})); // passando um obj vazio Fica navegando entre os padroes 0 e 1000
