  // existe maneiras mais modernas pra percorrer o array
 // do que usar for in: ex. for each, map, reduce, filter,
// nao sao estruturas de controle, mas sim funçoes de array


// // FOR IN É PRA PEGAR OS INDICES EM CASO DE ARRAY,
// E OS ATRIBUTOS NO CASO DE OBJ

const notas = [3.2, 5.6, 8.3, 7.1]

for (let i in notas) {
  console.log(` os índices sao : ${i } e os valores sao : ${notas[i]}`);
}

// EM OBJETOS FAZ MAIS SENTIDO USAR O FOR IN PARA PEGAR

const pessoa = {
  nome:'eduardo',
  sobrenome:'franco',
  idade: 50,
  altura: 1.60
}

for (let indice in pessoa ){// pega todos os atributos
console.log(indice, pessoa[indice]);

}
