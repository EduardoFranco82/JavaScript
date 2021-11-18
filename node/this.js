//THIS NAO APONTA PARA GLOBAL, E SIM PARA MODULE.EXPORTS




console.log(this === global);//false
console.log(this === module);//false


console.log(this === module.exports);//true
console.log(this === exports);//true FORA DE UMA FUNÇAO APONTA

// DENTRO DE UMA FUNÇAO NAO APONTA PARA EXPORTS, APONTA PARA GLOBAL
function logThis (){

    console.log('Dentro de uma funçao....');
    console.log(this === exports);//false
    console.log(this === module.exports);//false
    console.log(this === global );//true
}

logThis()