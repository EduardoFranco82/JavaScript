// funçao anonima, funçao sem nome
const soma = function(x,y){
    return x + y;

}

const imprimirResulatado = function(a,b, resultado = soma){
    console.log(resultado(a,b));
}

imprimirResulatado (3,4)
imprimirResulatado (3,4,soma)
imprimirResulatado (3,4, function(x,y){return x - y;})
imprimirResulatado (3,4,(x,y) => x * y);

const pessoa = {
    falar: function (){
        console.log('ola, tudo bem!!!'); 
    }

    
}
pessoa.falar()

// arrow sempree e funçao anonima