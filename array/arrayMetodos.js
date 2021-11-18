//POP RETIRAR ULTIMO ELEMENTO DO ARRAY

const pilotos = ['Vetel', 'Alonso', 'Raikonen','Massa']

pilotos.pop()
console.log(pilotos);

// PUSH ADICIONA UM ELEMENTO NA ULTIMA POSIÇAO DO ARRAYS

pilotos.push('Vestappen')
console.log(pilotos);

// SHIFT RETIRA O PRIMEIRO ELEMENTO DA LISTA 

pilotos.shift()
console.log(pilotos);

// UNSHIFT ADICIONA NA PRIMEIRA POSIÇAO
pilotos.unshift('Hamilton')
console.log(pilotos);

// SPLICE PODE ADICIONAR E REMOVER ELEMENTOS
// ADICIONAR

pilotos.splice(1,0,'Massa','Botas')// indice 1 nao remove ninguem e adiciona massa e botas
console.log(pilotos);

//REMOVER

pilotos.splice(1,2)// a partir do indice 1 remove 2 elementos 
console.log(pilotos);

// SLICE CORTAR E PEGAR O ARRAY A PARTIR DAQUELA POSIÇAO

const algunsPilotos = pilotos.slice(1)// a partir do indice 1 pega tudo e joga em OUTRO ARRAY
console.log(algunsPilotos);

console.log(pilotos);
algunsPilotos2 = pilotos.slice(1,3)// a partir do 1 e antes do 3
console.log(algunsPilotos2);