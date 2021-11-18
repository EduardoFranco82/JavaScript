function soma (){
    let soma = 0;
    for (i in arguments) { // usando antes da versao ecmascript 2017. agora usa rest/spread
        soma += arguments[i];
    }
    return soma; // funçao precisa colocar retorno


}

console.log(soma (1,2,3,7));
console.log(soma (1));
console.log(soma (1.1,2.2,3.3));
console.log(soma (1.1,2.2,'teste'));
console.log(soma ('edu','ana'));