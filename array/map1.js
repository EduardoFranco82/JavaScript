//MAP TRANSFORMA OS ELEMENTOS DE UM ARRAY, SEMPRE NA MESMA QUANTIDADE
// MAP USA UMA FUNÇAO CALLBACK EM UMA VARIAVEL E TRANSFORMA OS ELEMENTOS

const numeros = [1,2,3,4,5]

const dobroNumeros = numeros.map(function(elemento){
    return elemento * 2
})
// ele nao modifica o array atual
console.log(dobroNumeros, numeros);

// podemos encadear MAPS

const soma10 = e => e + 10 
const tripolo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

const resultado = numeros.map(soma10).map(tripolo).map(paraDinheiro)// resultado de array chamando outro array
console.log(numeros, resultado);