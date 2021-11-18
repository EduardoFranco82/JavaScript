const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i in numeros) {
    if (i == 5) {     // atençao == nao ===
        break       // este break esta associado ao bloco for, nao ao if // atençao
    }

    console.log(i, ' = ', numeros[i]);

}

for (let y in numeros) {
    if (y == 5) {

        continue    // no caso de constinue, ele pula o y ==5 e continua executando

    } 
    console.log(y, numeros[y])
}

// fazendo com rotulo, ou seja, uma laço dentro do outro. Não usar.

externo: for (let i in numeros) {
    for (let j in numeros){
        if (i ==2 && j ==3) break externo
        console.log(`Par : ${i} , ${j}`);
    }
}