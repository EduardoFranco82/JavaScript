// ARRAY EM JS E UM OBJETO
console.log(typeof Array, typeof new Array, typeof []);// function / obj / obj 
// estrutura heterogenica, mas boa pratica trabalhar com um so tipo de dado

let aprovados = new Array('Bia','Carlos','Joao');
console.log(aprovados);

aprovados = ['Bia','carlos','joao']

console.log(aprovados[0]);
console.log(aprovados[3]);// undefined

aprovados [3] = 'eduardo';
aprovados.push('maria');

console.log(aprovados.length);

aprovados[9]= 'rafael'// os indices do meio que nao tem valor sao undefined
console.log(aprovados);

console.log(aprovados[7]=== undefined);// true

// ALGUMAS FUNÇOES
// ORDENAR O ARRAY
// SORTE COLOCAR EM ORDEM ALFABETICA
aprovados.sort()
console.log(aprovados);

// DELETAR UM INDICE DO ARRAY

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

// SPLICE ['retira a partir', 'quantidade', 'adicionados']

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1)
console.log(aprovados);

aprovados.splice(1,1,'elemento adicionado1','elemento adicionado2')// retira 1 elemento do indice 1 e adicona os demais
console.log(aprovados);


