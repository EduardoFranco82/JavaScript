// armazenando uma funcao em uma variavel

const imprimirSoma = function (a,b){ // funçao anônima, pois a funçao nao tem nome
    console.log(a + b);
}

imprimirSoma(2,3); // 5. basta chamar o nome da constante

// armazenando uma funcao Arow em uma variavel

const soma = (a,b) => {     // funçao arrow. a seta substitui o nome function
    return a + b;
}
console.log(soma(2,3));

// retorno implícito

const subtracao = (a , b) => a -b; // funcao executa uma unica sentença de codigo 
console.log(subtracao(2,3));

const fraseLegal = a => console.log(a); // quando tem um so paramentro
fraseLegal('Eu sou foda') 