console.log(soma(5,9));// pode ser chamada antes de declarar a funçao 



// function declaration
function soma (a, b){ // essa pode ser chamada antes de ser declarada. Primeiro o js verifica todas as funçoes para depois começar a executar
    return a + b ;
}

// function expression
const sub = function (a, b){
    return a -b;
}

// named function expression

const mult = function mult (a, b){
    return a * b;
}

console.log(mult(1,2));// so pode ser chamado depois de ser declarada